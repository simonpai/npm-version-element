export async function fetchPackageVersion(packageName, { tag = 'latest' } = {}) {
  const response = await fetch(`https://registry.npmjs.org/${packageName}`);
  const data = await response.json();
  return data['dist-tags'][tag];
}
