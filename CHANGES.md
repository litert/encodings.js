# Changes Logs

## v2.3.0

- config(deps): updated dependencies.
- fix(encoding): fixed decoding of the `urlencode`.
- build(test): added test cases.
- build(project): upgraded the minimum version of Node.js to `v14`.

## v2.2.0

- Renamed `base62` to `base62x`.

    > Original `base62` API is reserved but deprecated, and will be removed in next major version.

## v2.1.0

- Added encoding `base32`.

## v2.0.0

- Simplified the APIs.

## v1.1.1

- Fixed the `convert` result from `base62x` to `buffer`, `hex`, `base64`, `utf8`.
- Improved the example `04-compare` with **binary-safe** tests.
- Added supports for encoding `urlencode`.

## v1.1.0

- Fixed the signature of method `compare` and `convert`.
- Added supports for encoding `base62x`.

## v1.0.1

- Upgrade dependencies `@litert/core`, to use standalone error-hub.
