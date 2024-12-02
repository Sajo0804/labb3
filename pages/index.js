// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Min Next.js-app</h1>
      <p>Denna app körs på port: {process.env.PORT}</p>
      <p>Användarautentiseringsnyckel: {process.env.API_KEY}</p>
    </div>
  );
}
