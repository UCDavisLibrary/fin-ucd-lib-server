ARG NODEJS_BASE
FROM ${NODEJS_BASE}

RUN npm link @ucd-lib/fin-ucd-lib-node-utils

RUN mkdir /service
WORKDIR /service

COPY package.json .
COPY package-lock.json .
RUN npm install --production && npm dedupe

COPY lib lib
COPY schemas schemas
COPY index.js .
COPY reindex.js .

ARG UCD_LIB_SERVER_REPO_HASH
ARG UCD_LIB_SERVER_REPO_TAG
ENV UCD_LIB_SERVER_REPO_HASH ${UCD_LIB_SERVER_REPO_HASH}
ENV UCD_LIB_SERVER_REPO_TAG ${UCD_LIB_SERVER_REPO_TAG}

CMD node index.js
