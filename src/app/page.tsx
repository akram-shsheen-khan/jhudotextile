"use client";
import withAuth from "@/utils/withAuth";

const Home = () => {
  return (
    <div className="max-w-[1200px] mr-10">
      <table className="mr-10">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Chemical Name
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Code
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Opening Stock
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Purchasing
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Total Received
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Half Bleach Chemical
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Dyeing Chemical
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Total Consumption
            </th>
            <th className="py-4 px-6 bg-grey-lighter bg-red-700 text-white font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salt</td>
            <td>1</td>
            <td>100</td>
            <td>100</td>
            <td>200</td>
            <td>70</td>
            <td>30</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Caustic</td>
            <td>2</td>
            <td>200</td>
            <td>100</td>
            <td>300</td>
            <td>150</td>
            <td>40</td>
            <td>190</td>
            <td>110</td>
          </tr>
          <tr>
            <td>Soda Ash</td>
            <td>3</td>
            <td>50</td>
            <td>100</td>
            <td>150</td>
            <td>Shaheen1</td>
            <td>Shaheen2</td>
            <td>Shaheen3</td>
            <td>Shaheen4</td>
          </tr>
          <tr>
            <td>Fixing</td>
            <td>4</td>
            <td>100</td>
            <td>100</td>
            <td>200</td>
            <td>Shaheen1</td>
            <td>Shaheen2</td>
            <td>Shaheen3</td>
            <td>Shaheen4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default withAuth(Home);
