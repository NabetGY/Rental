from copy import error
from os import closerange
from django.contrib.auth import authenticate
from django.contrib.sessions.models import Session
from django.shortcuts import get_object_or_404

from rest_framework import serializers, viewsets
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from users.models import UserProfile
from users.serializers import UserSerializer, UpdateUserSerializer, CustomTokenObtainSerializer, CustomUserSerializer

from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken


class UserViewSet( viewsets.GenericViewSet ):
    model = UserProfile
    serializer_class = UserSerializer
    queryset = None

    def get_queryset( self ):
        if self.queryset is not None:
            self.queryset = self.model.objects.filter( is_active = True )
        return self.queryset

    def get_object( self, pk ):
        return get_object_or_404( self.model, pk = pk )

    def create( self, request ):
        user_serializer = self.serializer_class( data = request.data )
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(
                { 'message': 'Usuario registrado correctamente.'},
                status = status.HTTP_201_CREATED
            )
        return Response(
            {
                'message': 'Hay errores en el registro.',
                'errors': user_serializer.errors
            },
            status = status.HTTP_400_BAD_REQUEST
        )

    def retrieve( self, request, pk = None ):
        user = self.get_object( pk )
        user_serializer = self.serializer_class( user )
        return Response( user_serializer.data )

    def update( self, request, pk = None ):
        user = self.get_object( pk )
        user_serializer = UpdateUserSerializer( user, data = request.data )
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(
                { 'message': 'Usuario actualizado correctamente.'},
                status = status.HTTP_201_CREATED
            )
        return Response(
            {
                'message': 'Hay errores en la actualizacion.',
                'errors': user_serializer.errors
            },
            status = status.HTTP_400_BAD_REQUEST
        )

    def destroy( self, request, pk = None ):
        user_destroy = self.model.objects.filter( id = pk
                                                 ).update( is_active = False )
        if user_destroy == 1:
            return Response(
                { 'message': 'Usuario eliminado correctamente.'},
                status = status.HTTP_201_CREATED
            )
        return Response(
            {
                'message': 'No existe el usuario que desea eliminar.',
                'errors': user_destroy.errors
            },
            status = status.HTTP_404_NOT_FOUND
        )


class Login( TokenObtainPairView ):
    serializer_class = CustomTokenObtainSerializer

    def post( self, request, *args, **kwargs ):
        username = request.data.get( 'username' )
        password = request.data.get( 'password' )
        user = authenticate( username = username, password = password )
        if user:
            login_serializer = self.serializer_class( data = request.data )
            if login_serializer.is_valid():
                user_serializer = CustomUserSerializer( user )
                return Response(
                    {
                        'token':
                            login_serializer.validated_data.get( 'access' ),
                        'refreshToken':
                            login_serializer.validated_data.get( 'refresh' ),
                        'user':
                            user_serializer.data,
                        'message':
                            'Inicio de sesion exitoso.'
                    },
                    status = status.HTTP_200_OK
                )
            return Response(
                { 'error': 'Contraseña o nombre de usuario incorrectos'},
                status = status.HTTP_400_BAD_REQUEST
            )
        return Response(
            { 'error': 'Contraseña o nombre de usuario incorrectos'},
            status = status.HTTP_400_BAD_REQUEST
        )


class Logout( GenericAPIView ):

    def post( self, request, *args, **kwargs ):
        user = UserProfile.objects.filter( email = request.data.get( 'email', 0 ) )
        if user.exists():
            RefreshToken.for_user( user.first() )
            return Response(
                { 'message': 'Sesion cerrada correctamente.'},
                status = status.HTTP_200_OK
            )
        return Response(
            { 'error': 'No existe este usuario.'},
            status = status.HTTP_400_BAD_REQUEST
        )
