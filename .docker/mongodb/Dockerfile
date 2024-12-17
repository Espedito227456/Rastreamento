FROM mongo:8.0.3

# Definindo variáveis de ambiente
ENV MONGO_REPLICA_PORT=27017
ENV MONGO_REPLICA_HOST=localhost
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=example

# Expondo a porta do MongoDB
EXPOSE $MONGO_REPLICA_PORT

# Inicializando o replica set e criando o usuário root, se necessário
CMD mongod --port $MONGO_REPLICA_PORT --replSet rs0 --bind_ip 0.0.0.0 --auth & \
    MONGO_PID=$! && \
    # Espera o MongoDB iniciar
    sleep 5 && \
    # Comando para inicializar o replica set
    INIT_REPL_CMD="rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: '$MONGO_REPLICA_HOST:$MONGO_REPLICA_PORT' }] });" && \
    # Comando para criar o usuário root se não existir
    INIT_USER_CMD="db.getSiblingDB('admin').getUser('$MONGO_INITDB_ROOT_USERNAME') || db.getSiblingDB('admin').createUser({ user: '$MONGO_INITDB_ROOT_USERNAME', pwd: '$MONGO_INITDB_ROOT_PASSWORD', roles: [{ role: 'root', db: 'admin' }] });" && \
    # Inicializa o replica set e cria o usuário root
    until mongosh --port $MONGO_REPLICA_PORT --eval "$INIT_REPL_CMD" 2>&1 | grep -q "already initialized"; do \
    sleep 1; \
    done && \
    # Comando para criar o usuário root
    mongosh --port $MONGO_REPLICA_PORT --eval "$INIT_USER_CMD" && \
    echo "Replica set inicializado e usuário criado." && \
    # Aguarda o mongod terminar corretamente
    wait $MONGO_PID
