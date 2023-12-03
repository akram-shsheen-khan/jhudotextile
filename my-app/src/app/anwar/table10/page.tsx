import React from "react";

export default function Page() {
  return (
    <div className="table-responsive">
      <table className="table table-striped w-3/4 md:ml-32">
        <thead>
          <tr>
            <th className="text-red-900 py-5">#</th>
            <th className="text-red-900">First</th>
            <th className="text-red-900">Last</th>
            <th className="text-red-900">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
