/**
 * Get all rockets
 * @return [type]
 */
export async function getRockets() {
  const rockets = await fetch("https://api.spacexdata.com/v4/rockets");

  return rockets.json();
}

/**
 * Get rocket by id
 * @param id: string
 *
 * @return [type]
 */
export async function getRocket(id: string) {
  const rocket = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);

  return rocket.json();
}
