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
};
