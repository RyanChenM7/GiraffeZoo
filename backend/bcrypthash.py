import bcrypt

ROUNDS = 10

def hash(password: str) -> str:
    bytes = password.encode('utf-8')
    salt = bcrypt.gensalt(rounds=ROUNDS)
    hashed = bcrypt.hashpw(bytes, salt)
    return hashed.decode('utf-8')

def auth(pwd: str, hash: str) -> bool:
    bytes = pwd.encode('utf-8')

    hash = hash.encode('utf-8')
    res = bcrypt.checkpw(bytes, hash)
    return res
    

# print(hash("password0"))
# print(hash("password1"))
# print(hash("password2"))
# print(hash("password3"))

p = "password123"
print(hash(p))
print(auth(p, hash(p)))