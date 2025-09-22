import React from 'react';
import { useParams } from 'react-router-dom';
import updates from '@/data/updates.json';

function RenderContent({ content }) {
  return (
    <div>
      {content.split('\n').map((line, index) => (
        <p key={index} style={{ marginBottom: "4rem", marginInline: "4rem", textAlign: "justify"}}>{line}</p>
      ))}
    </div>
  );
}

function UpdatePage() {
  const { id } = useParams();
  const update = updates.find((update) => update.id.toString() === id);

  if (!update) {
    return <div>Update not found</div>;
  }

  return (
    <section id={update.id + update.title}>
      <div className="transparent-container" style={{padding: "1rem"}}>
        <h2>{update.title}</h2>
        <RenderContent content={update.content} />
      </div>
    </section>
  );
}

export default UpdatePage;