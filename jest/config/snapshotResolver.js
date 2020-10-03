const SNAPSHOT_FOLDER = '__snapshots__';

module.exports = {
  // resolves from test to snapshot path
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const path = testPath.split('/');

    path.splice(-1, 0, SNAPSHOT_FOLDER);

    return `${path
      .join('/')
      .replace(/\.test\.([tj]sx?)/, `${snapshotExtension}`)}`;
  },
  // resolves from snapshot to test path
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    `${snapshotFilePath
      .replace(`/${SNAPSHOT_FOLDER}`, '')
      .replace(snapshotExtension, '.test')}.tsx`,

  // Example test path, used for preflight consistency check of the implementation above
  testPathForConsistencyCheck:
    'packages/core/components/Example/Example.test.tsx',
};
