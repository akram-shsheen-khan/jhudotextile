"use client";
import { publicAPI } from "../../../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select } from "antd";
// import moment from "moment";
import { PartyI } from "../../types/interface/partyName";
import { QualityI } from "../../types/interface/quality";
import { PonoI } from "../../types/interface/pono";
import { ProcessI } from "../../types/interface/process";
import { ColorI } from "../../types/interface/color";
import { CostingSheetI } from "../../types/interface/costingSheet";
import { handleFocus } from "../../../utils/globalFunctions";

import { Flex } from "antd";
import styled from "styled-components";
import withAuth from "@/utils/withAuth";

const Page = () => {
  const [dyeingdate, setDyeingDate] = useState<string>("");
  const [lotno, setLotNo] = useState<string>("");
  const [partyname, setPartyName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [quality, setQuality] = useState<string>("");
  const [pono, setPono] = useState<string>("");
  const [process, setProcess] = useState<string>("");

  const [weightkg, setWeightkg] = useState<number>(0);
  const [halfbleachcost, setHalfBleachCost] = useState<number>(0);
  const [dyescost, setDyesCost] = useState<number>(0);
  const [dyeingchemicalcost, setDyeingChemicalCost] = useState<number>(0);
  const [totalcost, setTotalCost] = useState<number>(0);

  const [costingSheet, setCostingSheet] = useState<Array<CostingSheetI>>([]);
  const [partyNames, setPartyNames] = useState<Array<PartyI>>([]);
  const [ponos, setPonos] = useState<Array<PonoI>>([]);
  const [qualities, setQualities] = useState<Array<QualityI>>([]);
  const [processes, setProcesses] = useState<Array<ProcessI>>([]);
  const [colors, setColors] = useState<Array<ColorI>>([]);
  const [onEdit, setOnEdit] = useState<CostingSheetI | null>(null);

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

  const Thead = styled.thead``;

  const Tbody = styled.tbody``;

  const Tr = styled.tr``;

  const Th = styled.th`
    text-align: start;
    padding: 20px;
    padding-bottom: 5px;
    color: red;
  `;

  const Td = styled.td`
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

  const onFinish = () => {
    if (onEdit) {
      publicAPI
        .put(`/costingSheet`, {
          id: onEdit._id,
          payload: {
            dyeingdate,
            lotno,
            partyname,
            color,
            quality,
            pono,
            process,
            weightkg,
            halfbleachcost,
            dyescost,
            dyeingchemicalcost,
            totalcost,
          },
        })
        .then(({ data }) => {
          getCostingSheet();
          toast.success(data);
        })
        .catch(({ data }) => toast.error(data));
    } else {
      publicAPI
        .post(`/costingSheet`, {
          dyeingdate,
          lotno,
          partyname,
          color,
          quality,
          pono,
          process,
          weightkg,
          halfbleachcost,
          dyescost,
          dyeingchemicalcost,
          totalcost,
        })
        .then(({ data }) => {
          getCostingSheet();

          toast.success(data);
          console.log(data);
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setDyeingDate("");
    setLotNo("");
    setPartyName("");
    setColor("");
    setQuality("");
    setPono("");
    setProcess("");
    setWeightkg(0);
    setHalfBleachCost(0);
    setDyesCost(0);
    setDyeingChemicalCost(0);
    setTotalCost(0);
  };
  const handleEdit = (item: CostingSheetI) => {
    setOnEdit(item);
  };
  const onChangePartyName = (value: string) => {
    console.log(`selected ${value}`);
    setPartyName(value);
  };

  const onChangeProcess = (value: string) => {
    console.log(`selected ${value}`);
    setProcess(value);
  };

  const onChangeColor = (value: string) => {
    console.log(`selected ${value}`);
    setColor(value);
  };

  const onChangeQuality = (value: string) => {
    console.log(`selected ${value}`);
    setQuality(value);
  };
  const onChangePono = (value: string) => {
    console.log(`selected ${value}`);
    setPono(value);
  };
  const handleDelete = async (id: string) => {
    publicAPI
      .patch(`/costingSheet`, { id })
      .then(({ data }) => {
        getCostingSheet();

        toast.success(data);
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setDyeingDate("");
    setLotNo("");
    setPartyName("");
    setColor("");
    setQuality("");
    setPono("");
    setProcess("");
    setWeightkg(0);
    setHalfBleachCost(0);
    setDyesCost(0);
    setDyeingChemicalCost(0);
    setTotalCost(0);
  };

  useEffect(() => {
    if (onEdit) {
      setDyeingDate(String(onEdit.dyeingdate));
      setPartyName(String(onEdit.partyname));
      setLotNo(String(onEdit.lotno));
      setPono(String(onEdit.pono));
      setProcess(String(onEdit.process));
      setColor(String(onEdit.color));
      setQuality(String(onEdit.quality));

      setWeightkg(Number(onEdit.weightkg));
      setHalfBleachCost(Number(onEdit.halfbleachcost));
      setDyesCost(Number(onEdit.dyescost));
      setDyeingChemicalCost(Number(onEdit.dyeingchemicalcost));
      setTotalCost(Number(onEdit.totalcost));
    }
  }, [onEdit]);

  const getCostingSheet = async () => {
    try {
      publicAPI
        .get(`/costingSheet`)

        .then(({ data }) => {
          setCostingSheet(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const getPartyNames = async () => {
    try {
      publicAPI
        .get(`/partyname`)

        .then(({ data }) => {
          setPartyNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const getPonos = async () => {
    try {
      publicAPI
        .get(`/pono`)

        .then(({ data }) => {
          setPonos(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getProcesses = async () => {
    try {
      publicAPI
        .get(`/process`)

        .then(({ data }) => {
          setProcesses(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getQualities = async () => {
    try {
      publicAPI
        .get(`/quality`)

        .then(({ data }) => {
          setQualities(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getColors = async () => {
    try {
      publicAPI
        .get(`/color`)

        .then(({ data }) => {
          setColors(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCostingSheet();
    getPartyNames();
    getPonos();
    getProcesses();
    getQualities();
    getColors();
  }, []);

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
                  <Input
                    id="dyeingdate"
                    type="date"
                    value={dyeingdate}
                    onChange={(e) => setDyeingDate(e.target.value)}
                    placeholder="Date"
                  />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Lot No</Label>
                  <Input
                    id="lotno"
                    type="text"
                    value={lotno}
                    onChange={(e) => setLotNo(e.target.value)}
                    placeholder="Lot No"
                  />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Party Name</Label>
                  <Select
                    showSearch
                    placeholder="Select Party Name"
                    value={partyname}
                    optionFilterProp="children"
                    onChange={onChangePartyName}
                    filterOption={(input, option) =>
                      String(option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={
                      partyNames?.length > 0
                        ? partyNames.map((party: PartyI) => {
                            return {
                              value: party.partyname,
                              label: party.partyname,
                            };
                          })
                        : []
                    }
                  />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Color</Label>
                  <Select
                    showSearch
                    placeholder="Select a Color"
                    optionFilterProp="children"
                    value={color}
                    onChange={onChangeColor}
                    filterOption={(input, option) =>
                      String(option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={
                      colors?.length > 0
                        ? colors.map((colo: ColorI) => {
                            return {
                              value: colo.color,
                              label: colo.color,
                            };
                          })
                        : []
                    }
                  />
                </InputArea>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <InputArea>
                  <Label>Quality</Label>
                  <Select
                    showSearch
                    placeholder="Select Quality"
                    value={quality}
                    optionFilterProp="children"
                    onChange={onChangeQuality}
                    filterOption={(input, option) =>
                      String(option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={
                      qualities?.length > 0
                        ? qualities.map((qual: QualityI) => {
                            return {
                              value: qual.quality,
                              label: qual.quality,
                            };
                          })
                        : []
                    }
                  />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Po No</Label>
                  <Select
                    showSearch
                    placeholder="Select PO NO"
                    optionFilterProp="children"
                    value={pono}
                    onChange={onChangePono}
                    filterOption={(input, option) =>
                      String(option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={
                      ponos?.length > 0
                        ? ponos.map((pon: PonoI) => {
                            return {
                              value: pon.pono,
                              label: pon.pono,
                            };
                          })
                        : []
                    }
                  />
                </InputArea>
              </Td>
              <Td>
                <InputArea>
                  <Label>Process</Label>
                  <Select
                    showSearch
                    placeholder="Select a Process"
                    optionFilterProp="children"
                    value={process}
                    onChange={onChangeProcess}
                    filterOption={(input, option) =>
                      String(option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={
                      processes?.length > 0
                        ? processes.map((proc: ProcessI) => {
                            return {
                              value: proc.process,
                              label: proc.process,
                            };
                          })
                        : []
                    }
                  />
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
};
export default withAuth(Page);
