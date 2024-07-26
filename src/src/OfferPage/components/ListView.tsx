import RecentTableData from "../../views/Dashboard/RecentTableData";

const ListView = (props:any) => {
    const {projects}=props;
    return (
        <>
            <RecentTableData projects={projects}></RecentTableData>
        </>
    )
}

export default ListView;