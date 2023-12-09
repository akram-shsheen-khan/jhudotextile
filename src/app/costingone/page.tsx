"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select } from "antd";
// import moment from "moment";
import { PartyI } from "../types/interface/partyName";
import { QualityI } from "../types/interface/quality";
import { PonoI } from "../types/interface/pono";
import { ProcessI } from "../types/interface/process";
import { ColorI } from "../types/interface/color";
import { CostingSheetI } from "../types/interface/costingSheet";
import { handleFocus } from "../../utils/globalFunctions";
import { ChemicalI } from "../types/interface/chemicalName";
import { DyesI } from "../types/interface/dyesName";

import { Flex } from "antd";

export default function Page() {
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
  const [chemicalNames, setChemicalNames] = useState<Array<ChemicalI>>([]);
  const [dyesNames, setDyesNames] = useState<Array<DyesI>>([]);
  const [onEdit, setOnEdit] = useState<CostingSheetI | null>(null);

  const [chemicalname, setChemicalName] = useState<string>("");
  const [hbquantity1, setHBQuantity1] = useState<number>(0);
  const [hbrate1, setHBRate1] = useState<number>(0);
  const [hbamount1, setHBAmount1] = useState<number>(0);

  const [chemicalname2, setChemicalName2] = useState<string>("");
  const [quantity2, setQuantity2] = useState<number>(0);
  const [rate2, setRate2] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);

  const [chemicalname3, setChemicalName3] = useState<string>("");
  const [quantity3, setQuantity3] = useState<number>(0);
  const [rate3, setRate3] = useState<number>(0);
  const [amount3, setAmount3] = useState<number>(0);

  const [chemicalname4, setChemicalName4] = useState<string>("");
  const [quantity4, setQuantity4] = useState<number>(0);
  const [rate4, setRate4] = useState<number>(0);
  const [amount4, setAmount4] = useState<number>(0);

  const [chemicalname5, setChemicalName5] = useState<string>("");
  const [quantity5, setQuantity5] = useState<number>(0);
  const [rate5, setRate5] = useState<number>(0);
  const [amount5, setAmount5] = useState<number>(0);

  const [dyesname, setDyesName] = useState<string>("");
  const [dquantity1, setdQuantity1] = useState<number>(0);
  const [drate1, setdRate1] = useState<number>(0);
  const [damount1, setdAmount1] = useState<number>(0);

  const [dyesname2, setDyesName2] = useState<string>("");
  const [dquantity2, setdQuantity2] = useState<number>(0);
  const [drate2, setdRate2] = useState<number>(0);
  const [damount2, setdAmount2] = useState<number>(0);

  const [dyesname3, setDyesName3] = useState<string>("");
  const [dquantity3, setdQuantity3] = useState<number>(0);
  const [drate3, setdRate3] = useState<number>(0);
  const [damount3, setdAmount3] = useState<number>(0);

  const [dyesname4, setDyesName4] = useState<string>("");
  const [dquantity4, setdQuantity4] = useState<number>(0);
  const [drate4, setdRate4] = useState<number>(0);
  const [damount4, setdAmount4] = useState<number>(0);

  const [dyesname5, setDyesName5] = useState<string>("");
  const [dquantity5, setdQuantity5] = useState<number>(0);
  const [drate5, setdRate5] = useState<number>(0);
  const [damount5, setdAmount5] = useState<number>(0);

  const [chemicalname6, setChemicalName6] = useState<string>("");
  const [quantity6, setQuantity6] = useState<number>(0);
  const [rate6, setRate6] = useState<number>(0);
  const [amount6, setAmount6] = useState<number>(0);

  const [chemicalname7, setChemicalName7] = useState<string>("");
  const [quantity7, setQuantity7] = useState<number>(0);
  const [rate7, setRate7] = useState<number>(0);
  const [amount7, setAmount7] = useState<number>(0);

  const [chemicalname8, setChemicalName8] = useState<string>("");
  const [quantity8, setQuantity8] = useState<number>(0);
  const [rate8, setRate8] = useState<number>(0);
  const [amount8, setAmount8] = useState<number>(0);

  const [chemicalname9, setChemicalName9] = useState<string>("");
  const [quantity9, setQuantity9] = useState<number>(0);
  const [rate9, setRate9] = useState<number>(0);
  const [amount9, setAmount9] = useState<number>(0);

  const [chemicalname10, setChemicalName10] = useState<string>("");
  const [quantity10, setQuantity10] = useState<number>(0);
  const [rate10, setRate10] = useState<number>(0);
  const [amount10, setAmount10] = useState<number>(0);

  const [chemicalname11, setChemicalName11] = useState<string>("");
  const [quantity11, setQuantity11] = useState<number>(0);
  const [rate11, setRate11] = useState<number>(0);
  const [amount11, setAmount11] = useState<number>(0);

  const [chemicalname12, setChemicalName12] = useState<string>("");
  const [quantity12, setQuantity12] = useState<number>(0);
  const [rate12, setRate12] = useState<number>(0);
  const [amount12, setAmount12] = useState<number>(0);

  const [chemicalname13, setChemicalName13] = useState<string>("");
  const [quantity13, setQuantity13] = useState<number>(0);
  const [rate13, setRate13] = useState<number>(0);
  const [amount13, setAmount13] = useState<number>(0);

  const onFinish = () => {
    if (onEdit) {
      axios
        .put("http://localhost:3000/api/costingSheet", {
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
      axios
        .post("http://localhost:3000/api/costingSheet", {
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

  const onChangeChemical = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName(value);
  };

  const onChangeChemical2 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName2(value);
  };

  const onChangeChemical3 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName3(value);
  };

  const onChangeChemical4 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName4(value);
  };

  const onChangeChemical5 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName5(value);
  };

  const onChangeDyes = (value: string) => {
    console.log(`selected ${value}`);
    setDyesName(value);
  };

  const onChangeDyes2 = (value: string) => {
    console.log(`selected ${value}`);
    setDyesName2(value);
  };

  const onChangeDyes3 = (value: string) => {
    console.log(`selected ${value}`);
    setDyesName3(value);
  };

  const onChangeDyes4 = (value: string) => {
    console.log(`selected ${value}`);
    setDyesName4(value);
  };

  const onChangeDyes5 = (value: string) => {
    console.log(`selected ${value}`);
    setDyesName5(value);
  };

  const onChangeChemical6 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName6(value);
  };

  const onChangeChemical7 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName7(value);
  };

  const onChangeChemical8 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName8(value);
  };

  const onChangeChemical9 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName9(value);
  };

  const onChangeChemical10 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName10(value);
  };

  const onChangeChemical11 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName11(value);
  };

  const onChangeChemical12 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName12(value);
  };

  const onChangeChemical13 = (value: string) => {
    console.log(`selected ${value}`);
    setChemicalName13(value);
  };

  const handleDelete = async (id: string) => {
    axios
      .patch(`http://localhost:3000/api/costingSheet`, { id })
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
      fetch("http://localhost:3000/api/costingSheet")
        .then((res) => res.json())
        .then((data) => {
          setCostingSheet(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const getPartyNames = async () => {
    try {
      fetch("http://localhost:3000/api/partyname")
        .then((res) => res.json())
        .then((data) => {
          setPartyNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };
  const getPonos = async () => {
    try {
      fetch("http://localhost:3000/api/pono")
        .then((res) => res.json())
        .then((data) => {
          setPonos(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getProcesses = async () => {
    try {
      fetch("http://localhost:3000/api/process")
        .then((res) => res.json())
        .then((data) => {
          setProcesses(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getQualities = async () => {
    try {
      fetch("http://localhost:3000/api/quality")
        .then((res) => res.json())
        .then((data) => {
          setQualities(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getColors = async () => {
    try {
      fetch("http://localhost:3000/api/color")
        .then((res) => res.json())
        .then((data) => {
          setColors(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getChemicals = async () => {
    try {
      fetch("http://localhost:3000/api/chemicalname")
        .then((res) => res.json())
        .then((data) => {
          setChemicalNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getDyess = async () => {
    try {
      fetch("http://localhost:3000/api/dyesname")
        .then((res) => res.json())
        .then((data) => {
          setDyesNames(data);
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
    getChemicals();
    getDyess();
  }, []);

  useEffect(() => {
    setHBAmount1(Number(hbquantity1) * Number(hbrate1));
  }, [hbquantity1, hbrate1]);

  useEffect(() => {
    setAmount2(Number(quantity2) * Number(rate2));
  }, [quantity2, rate2]);

  useEffect(() => {
    setAmount3(Number(quantity3) * Number(rate3));
  }, [quantity3, rate3]);

  useEffect(() => {
    setAmount4(Number(quantity4) * Number(rate4));
  }, [quantity4, rate4]);

  useEffect(() => {
    setAmount5(Number(quantity5) * Number(rate5));
  }, [quantity5, rate5]);

  useEffect(() => {
    setdAmount1(Number(dquantity1) * Number(drate1));
  }, [dquantity1, drate1]);

  useEffect(() => {
    setdAmount2(Number(dquantity2) * Number(drate2));
  }, [dquantity2, drate2]);

  useEffect(() => {
    setdAmount3(Number(dquantity3) * Number(drate3));
  }, [dquantity3, drate3]);

  useEffect(() => {
    setdAmount4(Number(dquantity4) * Number(drate4));
  }, [dquantity4, drate4]);

  useEffect(() => {
    setdAmount5(Number(dquantity5) * Number(drate5));
  }, [dquantity5, drate5]);

  useEffect(() => {
    setAmount6(Number(quantity6) * Number(rate6));
  }, [quantity6, rate6]);

  useEffect(() => {
    setAmount7(Number(quantity7) * Number(rate7));
  }, [quantity7, rate7]);

  useEffect(() => {
    setAmount8(Number(quantity8) * Number(rate8));
  }, [quantity8, rate8]);

  useEffect(() => {
    setAmount9(Number(quantity9) * Number(rate9));
  }, [quantity9, rate9]);

  useEffect(() => {
    setAmount10(Number(quantity10) * Number(rate10));
  }, [quantity10, rate10]);

  useEffect(() => {
    setAmount11(Number(quantity11) * Number(rate11));
  }, [quantity11, rate11]);

  useEffect(() => {
    setAmount12(Number(quantity12) * Number(rate12));
  }, [quantity12, rate12]);

  useEffect(() => {
    setAmount13(Number(quantity13) * Number(rate13));
  }, [quantity13, rate13]);

  return (
    <div className="mt-5 ml-7 w-4/5 md:ml-32">
      <div className="bg-indigo-500 h-10 rounded-t-lg border border-indigo-500">
        <p className="p-2 text-white text-center w-4/5">
          Jhudo Textile Industries
        </p>
      </div>

      <div>
        <form>
          <table className="w-full">
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Date</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Lot No</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Party Name</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Color</label>
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="dyeingdate"
                  type="date"
                  value={dyeingdate}
                  onChange={(e) => setDyeingDate(e.target.value)}
                  placeholder="Date"
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="lotno"
                  type="text"
                  value={lotno}
                  onChange={(e) => setLotNo(e.target.value)}
                  placeholder="Lot No"
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
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
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
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
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Quality</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">PO NO</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Process</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Weight Kgo</label>
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
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
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
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
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
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
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionD"
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">
                  Half Bleach Cost
                </label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Dyes Cost</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">
                  Dyeing Chemical Cost
                </label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold">
                  Total Cost Per Kg
                </label>
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionA"
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionB"
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionC"
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionC"
                />
              </td>
            </tr>

            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">
                  Half Bleach Chemical
                </label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Quantity</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Rate</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Amount</label>
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  value={chemicalname}
                  optionFilterProp="children"
                  onChange={onChangeChemical}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={hbquantity1}
                  onChange={(e) => setHBQuantity1(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={hbrate1}
                  onChange={(e) => setHBRate1(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={hbamount1}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname2}
                  optionFilterProp="children"
                  onChange={onChangeChemical2}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity2"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity2}
                  onChange={(e) => setQuantity2(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate2"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate2}
                  onChange={(e) => setRate2(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount2"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount2}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname3}
                  optionFilterProp="children"
                  onChange={onChangeChemical3}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity3"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity3}
                  onChange={(e) => setQuantity3(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate3"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate3}
                  onChange={(e) => setRate3(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount3"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount3}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname4}
                  optionFilterProp="children"
                  onChange={onChangeChemical4}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity4"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity4}
                  onChange={(e) => setQuantity4(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate4"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate4}
                  onChange={(e) => setRate4(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount4"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount4}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname5}
                  optionFilterProp="children"
                  onChange={onChangeChemical5}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity5"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity5}
                  onChange={(e) => setQuantity5(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate5"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate5}
                  onChange={(e) => setRate5(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount5"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount5}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionA"
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionB"
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-green-900 font-bold uppercase">
                  Total Amount
                </label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionC"
                />
              </td>
            </tr>

            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold">Dyes Name</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Quantity</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Rate</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold ">Amount</label>
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a Dyes"
                  value={dyesname}
                  optionFilterProp="children"
                  onChange={onChangeDyes}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    dyesNames?.length > 0
                      ? dyesNames.map((dye: DyesI) => {
                          return {
                            value: dye.dyesname,
                            label: dye.dyesname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="dquantity1"
                  type="number"
                  onFocus={handleFocus}
                  value={dquantity1}
                  onChange={(e) => setdQuantity1(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="drate1"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={drate1}
                  onChange={(e) => setdRate1(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="damount1"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={damount1}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a Dyes"
                  value={dyesname2}
                  optionFilterProp="children"
                  onChange={onChangeDyes2}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    dyesNames?.length > 0
                      ? dyesNames.map((dye: DyesI) => {
                          return {
                            value: dye.dyesname,
                            label: dye.dyesname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="dquantity2"
                  type="number"
                  onFocus={handleFocus}
                  value={dquantity2}
                  onChange={(e) => setdQuantity2(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="drate2"
                  type="number"
                  placeholder="dRate2"
                  onFocus={handleFocus}
                  value={drate2}
                  onChange={(e) => setdRate2(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="damount2"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={damount2}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a Dyes"
                  value={dyesname3}
                  optionFilterProp="children"
                  onChange={onChangeDyes3}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    dyesNames?.length > 0
                      ? dyesNames.map((dye: DyesI) => {
                          return {
                            value: dye.dyesname,
                            label: dye.dyesname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="dquantity3"
                  type="number"
                  onFocus={handleFocus}
                  value={dquantity3}
                  onChange={(e) => setdQuantity3(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="drate3"
                  type="number"
                  placeholder="dRate2"
                  onFocus={handleFocus}
                  value={drate3}
                  onChange={(e) => setdRate3(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="damount3"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={damount3}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a Dyes"
                  value={dyesname4}
                  optionFilterProp="children"
                  onChange={onChangeDyes4}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    dyesNames?.length > 0
                      ? dyesNames.map((dye: DyesI) => {
                          return {
                            value: dye.dyesname,
                            label: dye.dyesname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="dquantity4"
                  type="number"
                  onFocus={handleFocus}
                  value={dquantity4}
                  onChange={(e) => setdQuantity4(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="drate4"
                  type="number"
                  placeholder="dRate4"
                  onFocus={handleFocus}
                  value={drate4}
                  onChange={(e) => setdRate4(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="damount4"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={damount4}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a Dyes"
                  value={dyesname5}
                  optionFilterProp="children"
                  onChange={onChangeDyes5}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    dyesNames?.length > 0
                      ? dyesNames.map((dye: DyesI) => {
                          return {
                            value: dye.dyesname,
                            label: dye.dyesname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="dquantity5"
                  type="number"
                  onFocus={handleFocus}
                  value={dquantity5}
                  onChange={(e) => setdQuantity5(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="drate5"
                  type="number"
                  placeholder="dRate"
                  onFocus={handleFocus}
                  value={drate5}
                  onChange={(e) => setdRate5(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="damount5"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={damount5}
                />
              </td>
            </tr>

            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionA"
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionB"
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-green-900 text-lg font-bold">
                  Total Dyes Amount
                </label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionC"
                />
              </td>
            </tr>

            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold">
                  Dyeing Chemical
                </label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold">Quantity</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold">Rate</label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-red-800 font-bold">Amount</label>
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname6}
                  optionFilterProp="children"
                  onChange={onChangeChemical6}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((dye: ChemicalI) => {
                          return {
                            value: dye.chemicalname,
                            label: dye.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity6"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity6}
                  onChange={(e) => setQuantity6(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate6"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate6}
                  onChange={(e) => setRate6(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount6"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount6}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname7}
                  optionFilterProp="children"
                  onChange={onChangeChemical7}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity7"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity7}
                  onChange={(e) => setQuantity7(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate7"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate7}
                  onChange={(e) => setRate7(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount7"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount7}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname8}
                  optionFilterProp="children"
                  onChange={onChangeChemical8}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity8"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity8}
                  onChange={(e) => setQuantity8(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate8"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate8}
                  onChange={(e) => setRate8(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount8"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount8}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname9}
                  optionFilterProp="children"
                  onChange={onChangeChemical9}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity9"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity9}
                  onChange={(e) => setQuantity9(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate9"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate9}
                  onChange={(e) => setRate9(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount9"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount9}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname10}
                  optionFilterProp="children"
                  onChange={onChangeChemical10}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity10"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity10}
                  onChange={(e) => setQuantity10(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate10"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate10}
                  onChange={(e) => setRate10(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount10"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount10}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname11}
                  optionFilterProp="children"
                  onChange={onChangeChemical11}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity11"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity11}
                  onChange={(e) => setQuantity11(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate11"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate11}
                  onChange={(e) => setRate11(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount11"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount11}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname12}
                  optionFilterProp="children"
                  onChange={onChangeChemical12}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity12"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity12}
                  onChange={(e) => setQuantity12(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate12"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate12}
                  onChange={(e) => setRate12(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount12"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount12}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <Select
                  className="border rounded outline-none focus:shadow-outline w-[300px] h-[40px]"
                  showSearch
                  placeholder="Select a chemical"
                  value={chemicalname13}
                  optionFilterProp="children"
                  onChange={onChangeChemical13}
                  filterOption={(input, option) =>
                    String(option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={
                    chemicalNames?.length > 0
                      ? chemicalNames.map((chemical: ChemicalI) => {
                          return {
                            value: chemical.chemicalname,
                            label: chemical.chemicalname,
                          };
                        })
                      : []
                  }
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="quantity13"
                  type="number"
                  placeholder="Quantity"
                  onFocus={handleFocus}
                  value={quantity13}
                  onChange={(e) => setQuantity13(Number(e.target.value))}
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="rate13"
                  type="number"
                  placeholder="Rate"
                  onFocus={handleFocus}
                  value={rate13}
                  onChange={(e) => setRate13(Number(e.target.value))}
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  id="amount13"
                  type="number"
                  placeholder="Amount"
                  disabled
                  value={amount13}
                />
              </td>
            </tr>
            <tr>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionA"
                />
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionB"
                />
              </td>

              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <label className="text-green-900 text-lg font-bold">
                  Total Dyeing Chemical Amount
                </label>
              </td>
              <td className="pl-1 border-l border-r border-b border-indigo-500">
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="descriptionC"
                />
              </td>
            </tr>
          </table>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="flex justify-between w-full px-3">
              <button
                onClick={onFinish}
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 mt-5 px-6 rounded"
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
