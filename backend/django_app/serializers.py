from rest_framework import serializers
from django_app import models


class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Agent
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = "__all__"


class ContractSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    class Meta:
        model = models.Contract
        fields = "__all__"

    @staticmethod
    def get_username(contract: models.Contract):
        try:
            username = contract.author.username
            return username
        except Exception as _:
            return ''
