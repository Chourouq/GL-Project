from pydantic import BaseModel


class RateSchema(BaseModel):
    userId:int
    lawyerId: int
    rate: float
    comment: str