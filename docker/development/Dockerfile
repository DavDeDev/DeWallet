# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
COPY package.json bun.lockb ./
RUN bun install

FROM install as prerelease
COPY . .

# # install with --production (exclude devDependencies)
# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
# FROM install AS prerelease
# COPY --from=install /temp/dev/node_modules node_modules
# COPY . .

# [optional] tests & build
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED 1
# RUN bun test
CMD bun dev


# copy production dependencies and source code into final image
# FROM base AS release
# COPY --from=install /temp/prod/node_modules node_modules
# COPY --from=prerelease /usr/src/app/index.ts .
# COPY --from=prerelease /usr/src/app/package.json .

# # run the app
# USER bun
# EXPOSE 3000/tcp
# ENTRYPOINT [ "bun", "run", "build" ]