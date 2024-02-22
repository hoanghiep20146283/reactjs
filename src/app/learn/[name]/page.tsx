export default function Page({ params }: { params: { name: string } }) {
    return <div>Learn: {JSON.stringify(params.name)}</div>
}