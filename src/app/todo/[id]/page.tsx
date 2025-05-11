import { TodoDetailTemplate } from "components/templates";

type TodoDetailPageProps = {
    params: Promise<{ id: string }>;
}

export default async function TodoDetailPage({ params }: TodoDetailPageProps) {
    const { id } = await params;
    return <TodoDetailTemplate id={id} />;
}
