export default function Learn({ params }: { params: { name: string } }) {
    return <div>Learn: {JSON.stringify(params.name)}</div>
}