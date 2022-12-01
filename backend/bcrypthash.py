import bcrypt

def hash(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password, salt)
    return hashed

def auth(pwd: str, hash: str) -> bool:
    return bcrypt.checkpw(pwd, hash)
