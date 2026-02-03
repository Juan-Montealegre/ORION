
import os
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseSettings

class Settings(BaseSettings):
    mongo_url: str = os.environ.get("MONGO_URL", "mongodb+srv://admin:password@cluster.mongodb.net/orion")
    db_name: str = "unilibre_orion"

settings = Settings()

class MongoDB:
    client: AsyncIOMotorClient = None

db = MongoDB()

async def connect_to_mongo():
    db.client = AsyncIOMotorClient(settings.mongo_url)
    print(">>> Conexión exitosa a MongoDB Atlas")

async def close_mongo_connection():
    db.client.close()
    print(">>> Conexión a MongoDB cerrada")

def get_database():
    return db.client[settings.db_name]
