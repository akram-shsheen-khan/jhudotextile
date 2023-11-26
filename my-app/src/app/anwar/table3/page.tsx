import { Collapse } from "antd";
import React from "react";

export default function page() {
  return (
    <div>
      <table className="text-left m-4 border-collapse w-20 h-9">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Feature Jhudo
            </th>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Supported?
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Conversations
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Question-Buttons
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Image Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ✅{" "}
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Video Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Audio Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Location Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Feature
            </th>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">
              Supported?
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Conversations
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Question-Buttons
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Image Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ✅{" "}
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Video Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Audio Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
          <tr className="hover:bg-blue-lightest">
            <td className="py-4 px-6 border-b border-grey-light">
              Location Attachment
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-center">
              ❌
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
