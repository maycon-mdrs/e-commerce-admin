import { Card } from "antd";

export function CardsInfo({ title, icon, value }: { title: string, icon: any, value: string }) {
    return (
        <Card className="shadow-sm" style={{ width: '100%' }} key={''}>
            <div className="d-flex flex-row align-items-center justify-content-center" style={{gap: 10}}>
                {icon}
                <section style={{ textAlign: 'center' }}>
                    <p className="mb-0">{title}</p> {/* titulo */}
                    <h6 className="mb-0">{value}</h6> {/* descrição */}
                </section>
            </div>
        </Card>
    );
}