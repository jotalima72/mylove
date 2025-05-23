// src/app/api/drive-images/route.ts
export async function GET() {
  const FOLDER_ID = '1uJMBeSDwdNdAPQZjOcYORxlmMmUV4sxE';
  const API_KEY = process.env.GOOGLE_DRIVE_API_KEY;

  try {
    const fields = 'files(id,name,thumbnailLink,mimeType)';
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=${fields}`;

    const response = await fetch(url);
    const data = await response.json();
    const images = data.files.map((file: { id: unknown; name: unknown; }) => ({
      id: file.id,
      name: file.name,
      url: `https://drive.google.com/uc?id=${file.id}`,
    }));

    return Response.json(images);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erro ao buscar imagens do Google Drive' }), {
      status: 500,
    });
  }
}
