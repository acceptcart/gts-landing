type JsonLdNode = Record<string, unknown>;

type JsonLdProps = {
  data: JsonLdNode | JsonLdNode[];
};

function asGraph(data: JsonLdNode | JsonLdNode[]) {
  if (!Array.isArray(data)) return data;

  return {
    "@context": "https://schema.org",
    "@graph": data.map(({ "@context": _context, ...node }) => node),
  };
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(asGraph(data)) }}
    />
  );
}
