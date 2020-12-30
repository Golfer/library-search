JWTSessions.encryption_key = 'a53c692b41f7ceb18aa9fa5db1ae22da42a68719facc96629cd390e0405365ecfccf0799684a4d73f9a48fd8cb64fa4931793f44ffe3e8fc19295ac942caa95f'
JWTSessions.token_store = :redis, {
    redis_host: "127.0.0.1",
    redis_port: "6379",
    redis_db_name: "0",
    token_prefix: "jwt_"
}