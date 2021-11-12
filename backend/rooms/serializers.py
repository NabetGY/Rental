from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from rooms.models import Room, Images


class ImagesSerializer( ModelSerializer ):
    
    class Meta:
        model = Images
        fields = ['image']


class RoomSerializer( ModelSerializer ):

    images = ImagesSerializer(many=True )

    class Meta:
        model = Room
        fields = [
            'titulo', 'area', 'banio', 'ciudad', 'ubicacion', 
            'descripcion', 'estrato', 'precio', 'estacionamiento', 'user',
            'created_data', 'modified_data', 'deleted_data', 'images'
        ]

    def create(self, validated_data):
        print(validated_data)
        images_data = validated_data.pop('images')
        room = Room.objects.create(**validated_data)
        for image_data in images_data:
            Images.objects.create(room=room, **image_data)
        return room
