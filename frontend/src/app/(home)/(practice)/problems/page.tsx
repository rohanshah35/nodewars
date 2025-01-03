import { ProblemTable } from "@/components/Practice/problem-table/problem-table";

export default async function Problems() {
  return (
    <div style={{ display: 'flex', paddingTop: "20px"}}>
     <div style={{ flex: 1 }}>
       <ProblemTable />
     </div>
   </div>
  )
}