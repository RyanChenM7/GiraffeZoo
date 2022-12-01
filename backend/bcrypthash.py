import bcrypt

ROUNDS = 10

def hash(password: str) -> str:
    bytes = password.encode('utf-8')
    salt = bcrypt.gensalt(rounds=ROUNDS)
    hashed = bcrypt.hashpw(bytes, salt)
    return hashed

def auth(pwd: str, hash: str) -> bool:
    return bcrypt.checkpw(pwd, hash)
    

print(hash("password0"))
print(hash("password1"))
print(hash("password2"))
print(hash("password3"))
