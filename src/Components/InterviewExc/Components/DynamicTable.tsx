export default function DynamicTable() {
  return (
    <section className="w-1/2 flex justify-center pt-1">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="border border-slate-600 text-left">1</th>
            <th className="border border-slate-600 text-left">2</th>
            <th className="border border-slate-600 text-left">3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600">asd</td>
            <td className="border border-slate-600">dfg</td>
            <td className="border border-slate-600">zxc</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
