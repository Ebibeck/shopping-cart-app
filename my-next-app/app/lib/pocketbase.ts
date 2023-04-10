import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false)

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion ='auto'

  
export async function getProduct(){
    const records = await pb.collection('products').getFullList({
        sort: '-created',
    });
    return records
}