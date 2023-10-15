export default function getFilesToBackup(lastBackup, changes) {
  const unsavedChanges = changes.filter((changes) => changes[1] > lastBackup);
  const filesToSave = unsavedChanges.map((item) => item[0]);
  const sortedIds = filesToSave.sort((a, b) => a - b);
  const flatedIds = [...new Set(sortedIds)];
  return flatedIds;
}

console.log(
  getFilesToBackup(1546300800, [
    [1, 1546300800],
    [2, 1546300800],
    [1, 1546300900],
    [1, 1546301000],
    [3, 1546301100],
  ])
);
