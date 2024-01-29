from passlib.context import CryptContext



pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class Hash():
    @staticmethod
    def bcrypt(password:str):
        hashedPassword=pwd_context.hash(password)
        return hashedPassword
    
    @staticmethod
    def verify(  hashedPassword , plain_password):
        return pwd_context.verify(plain_password , hashedPassword)
