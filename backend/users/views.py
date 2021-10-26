from copy import error
from datetime import datetime
from django.contrib.sessions.models import Session
from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from users.models import UserProfile
from users.serializers import UserSerializer, UserTokenSerializer, UpdateUserSerializer
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from rest_framework import status


class UserViewSet(viewsets.GenericViewSet):
    model = UserProfile
    serializer_class = UserSerializer
    queryset = None

    def get_queryset(self):
        if self.queryset is not None:
            self.queryset = self.model.objects.filter( is_active=True )
        return self.queryset

    def get_object(self, pk):
        return get_object_or_404( self.model, pk=pk )
        

    def create(self, request):
        user_serializer = self.serializer_class( data=request.data )
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(
                {
                    'message': 'Usuario registrado correctamente.'
                }, status= status.HTTP_201_CREATED
            )
        return Response(
            {
                'message': 'Hay errores en el registro.',
                'errors': user_serializer.errors
            }, status= status.HTTP_400_BAD_REQUEST
        )

    def retrieve( self, request, pk=None ):
        user = self.get_object(pk)
        user_serializer = self.serializer_class( user )
        return Response( user_serializer.data )

    def update(self, request, pk=None):
        user = self.get_object(pk)
        user_serializer = UpdateUserSerializer( user, data=request.data )
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(
                {
                    'message': 'Usuario actualizado correctamente.'
                }, status= status.HTTP_201_CREATED
            )
        return Response(
            {
                'message': 'Hay errores en la actualizacion.',
                'errors': user_serializer.errors
            }, status= status.HTTP_400_BAD_REQUEST
        )

    def destroy(self, request, pk=None):
        user_destroy = self.model.objects.filter( id=pk ).update( is_active=False )
        if  user_destroy ==1 :
            return Response(
                {
                    'message': 'Usuario eliminado correctamente.'
                }, status= status.HTTP_201_CREATED
            )
        return Response(
            {
                'message': 'No existe el usuario que desea eliminar.',
                'errors': user_destroy.errors
            }, status= status.HTTP_404_NOT_FOUND
        )

    

            
class Login(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        login_serializer = self.serializer_class( data = request.data, context ={'request': request} )
        print(login_serializer)
        if login_serializer.is_valid():
            user = login_serializer.validated_data['user']
            if user.is_active:
                token, created = Token.objects.get_or_create( user = user)
                user_serializer = UserTokenSerializer(user)
                if created:
                    return Response (
                        {
                            'token': token.key,
                            'user': user_serializer.data,
                            'message': 'inicio de sesion extitoso...',
                        }, status= status.HTTP_201_CREATED
                    )
                else:

                    ''' all_sessions = Session.objects.filter( expire_date_gte = datetime.now() )
                    if all_sessions.exists():
                        for session in all_sessions:
                            session_data = session.get_decoded()
                            if user.id == int( session_data.get('_auth_user_id' )):
                                session.delete()

                    token.delete()
                    token = Token.objects.create( user = user)
                    return Response (
                        {
                            'token': token.key,
                            'user': user_serializer.data,
                            'message': 'inicio de sesion extitoso...',
                        }, status= status.HTTP_201_CREATED
                    ) '''

                    token.delete()
                    return Response (
                        {
                            'error' : 'ya se ha iniciado sesion con este usuario...'
                        }, status= status.HTTP_409_CONFLICT
                    )
            else:
                return Response( { 'error': 'Este usuario no puede iniciar sesion...'}, status= status.HTTP_401_UNAUTHORIZED )
        else:
                return Response( { 'error': 'Nombre de usuario y contraseña incorrectos...'}, status= status.HTTP_400_BAD_REQUEST )

        return Response( { 'mensaje': ' Hola desde response' }, status = status.HTTP_200_OK )
        


class Logout(APIView):

    def get( self, request, *args, **kwargs):
        try:
            token = request.data.get('token')
            print(request.data)
            print(token)
            token = Token.objects.filter( key = token).first()
            print(token)

            if token:
                user = token.user

                all_sessions = Session.objects.filter( expire_date__gte = datetime.now() )
                if all_sessions.exists():
                    for session in all_sessions:
                        session_data = session.get_decoded()
                        if user.id == int( session_data.get('_auth_user_id' )):
                            session.delete()
                
                token.delete()

                session_message = 'Sesiones de usuario eliminadas...'
                token_message = 'Token Eliminado...'
                return Response(
                    {
                        'token_message': token_message,
                        'session_message': session_message
                    }, status= status.HTTP_200_OK
                )

            return Response(
                {
                    'error': 'No se ha encontrado un usuario con estas credenciales...'
                } ,status= status.HTTP_400_BAD_REQUEST
            )

        except:
            return Response(
                {
                    'error': 'No se ha encontrado token en la peticion...'
                } ,status= status.HTTP_409_CONFLICT
            )



