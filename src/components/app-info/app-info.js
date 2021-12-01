import "./app-info.css";

const AppInfo = ({data}) => {
    const amountForRise = data.filter(item => item.rise === true).length
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: { data.length }</h2>
            <h2>Премию получат: { amountForRise }</h2>
        </div>
    )
}

export default AppInfo;