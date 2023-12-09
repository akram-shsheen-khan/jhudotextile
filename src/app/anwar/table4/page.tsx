"use client";

import { Flex } from "antd";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 700px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 160px;
  padding: 0 10px;
  box-shadow: 0px 0px 5px #ccc;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label`
  text-align: start;
  color: red;
  padding: 3px;
  font-weight: regular;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  padding: 20px;
  padding-bottom: 5px;
  color: red;
`;

export const Td = styled.td`
  padding-top: 15px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  width: 100px;
  box-shadow: 0px 0px 5px #ccc;
`;

export default function Page() {
  return (
    <>
      <FormContainer>
        <Table>
          <Thead></Thead>
          <Tbody>
            <Tr>
              <Td>
                <InputArea>
                  <Label>Date</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Lot No</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Party Name</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Color</Label>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Label>Quality</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Po No</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Process</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Weight Kg</Label>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Label>H Bleach Cost per Kg</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Dyes Cost Per Kg</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Dy Chem Cost Per Kg</Label>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Total Cost Weight Kg</Label>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Table>
          <Thead>
            <Tr>
              <Th>H B Chemical Name</Th>
              <Th>Quantity</Th>
              <Th>Rate</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Table>
          <Thead>
            <Tr>
              <Th>Dyes Name</Th>
              <Th>Quantity</Th>
              <Th>Rate</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Table>
          <Thead>
            <Tr>
              <Th>Dyeing Chemical Name</Th>
              <Th>Quantity</Th>
              <Th>Rate</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Input />
                </InputArea>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Table>
          <Td>
            <InputArea>
              <Button>Save</Button>
            </InputArea>
          </Td>
        </Table>
      </FormContainer>
    </>
  );
}
