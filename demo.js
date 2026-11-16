const url = "./sample-plan.json";
let mytasks = []
async function getdata(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    let data = await response.json()
    return data
  } catch (e) {
    console.error(e);
  }
}
const tasks = await getdata(url)

export{tasks}
