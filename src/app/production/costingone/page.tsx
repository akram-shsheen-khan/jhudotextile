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
import { ChemicalI } from "../../types/interface/chemicalName";
import { DyesI } from "../../types/interface/dyesName";
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
  const [chemicalNames, setChemicalNames] = useState<Array<ChemicalI>>([]);
  const [dyesNames, setDyesNames] = useState<Array<DyesI>>([]);
  const [onEdit, setOnEdit] = useState<CostingSheetI | null>(null);

  const [chemicalname, setChemicalName] = useState<string>("");
  const [quantity1, setQuantity1] = useState<number>(0);
  const [rate1, setRate1] = useState<number>(0);
  const [amount1, setAmount1] = useState<number>(0);

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

  const [thbamount, setTHBAmount] = useState<number>(0);

  const [tdamount, setTDAmount] = useState<number>(0);

  const [tdchamount, setTDCHAmount] = useState<number>(0);

  const [hbcost, setHBCost] = useState<number>(0);

  const [tdyescost, setTDyesCost] = useState<number>(0);

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

  const getChemicals = async () => {
    try {
      publicAPI
        .get(`/chemicalname`)

        .then(({ data }) => {
          setChemicalNames(data);
        });
    } catch (error: any) {
      toast.error(error);
    }
  };

  const getDyess = async () => {
    try {
      publicAPI
        .get(`/dyesname`)

        .then(({ data }) => {
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
    setAmount1(Number(quantity1) * Number(rate1));
  }, [quantity1, rate1]);

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
    setTHBAmount(
      Number(amount1) +
        Number(amount2) +
        Number(amount3) +
        Number(amount4) +
        Number(amount5)
    );
  }, [amount1, amount2, amount3, amount4, amount5]);

  useEffect(() => {
    setTDAmount(
      Number(damount1) +
        Number(damount2) +
        Number(damount3) +
        Number(damount4) +
        Number(damount5)
    );
  }, [damount1, damount2, damount3, damount4, damount5]);

  useEffect(() => {
    setTDCHAmount(
      Number(amount6) +
        Number(amount7) +
        Number(amount8) +
        Number(amount9) +
        Number(amount10) +
        Number(amount11) +
        Number(amount12)
    );
  }, [amount6, amount7, amount8, amount9, amount10, amount11, amount12]);

  useEffect(() => {
    setHalfBleachCost(Number(thbamount) / Number(weightkg));
  }, [thbamount, weightkg]);

  useEffect(() => {
    setDyesCost(Number(tdamount) / Number(weightkg));
  }, [tdamount, weightkg]);

  useEffect(() => {
    setDyeingChemicalCost(Number(tdchamount) / Number(weightkg));
  }, [tdchamount, weightkg]);

  useEffect(() => {
    setTotalCost(
      Number(hbcost) + Number(tdyescost) + Number(dyeingchemicalcost)
    );
  }, [halfbleachcost, dyescost, dyeingchemicalcost]);

  return (
    <div className="container max-w-5xl mx-auto">
      <div
        className="max-width-full text-white 
grid lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2 md:mx-[50px] sm:mx-6 mx-3 mt-5"
      >
        <div className="bg-green-800 py-5 text-center col-span-full text-white">
          JHUDO TEXTILE INDUSTRIES
        </div>
        <div className="flex flex-col">
          <div className=" text-left">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Date
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dyeingdate"
              type="date"
              value={dyeingdate}
              onChange={(e) => setDyeingDate(e.target.value)}
              placeholder="Date"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Lot No
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="lotno"
              type="text"
              value={lotno}
              onChange={(e) => setLotNo(e.target.value)}
              placeholder="Lot No"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Party Name
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 text-gray-700 border w-full border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg- md:w-[225px] h-11"
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Color
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Quality
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-00 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              PN NO
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Process
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Weight Kg
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="weightkg"
              type="number"
              placeholder="Weight Kg"
              onFocus={handleFocus}
              value={weightkg}
              onChange={(e) => setWeightkg(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Half Bleach Cost
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="hbcost"
              type="number"
              placeholder="Half Bleach Cost"
              disabled
              value={halfbleachcost}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Dyes Cost
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dyescost"
              type="number"
              placeholder="Dyes Cost"
              disabled
              value={dyescost}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Dyeing Chemical Cost
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dyeingchemicalcost"
              type="number"
              placeholder="Dyes Chemical Cost"
              disabled
              value={dyeingchemicalcost}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Total Cost Per Kg
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="totalcost"
              type="number"
              placeholder="Total Cost"
              disabled
              value={totalcost}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              HB Chemical Name
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
              showSearch
              placeholder="Select a chemical"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-4 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-4 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Quantity
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity1}
              onChange={(e) => setQuantity1(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity2"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity2}
              onChange={(e) => setQuantity2(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity3"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity3}
              onChange={(e) => setQuantity3(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity4"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity4}
              onChange={(e) => setQuantity4(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity5"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity5}
              onChange={(e) => setQuantity5(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Rate
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate1}
              onChange={(e) => setRate1(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate2"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate2}
              onChange={(e) => setRate2(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate3"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate3}
              onChange={(e) => setRate3(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate4"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate4}
              onChange={(e) => setRate4(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate5"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate5}
              onChange={(e) => setRate5(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Amount
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount"
              type="number"
              placeholder="Amount"
              disabled
              value={amount1}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount2"
              type="number"
              placeholder="Amount"
              disabled
              value={amount2}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount3"
              type="number"
              placeholder="Amount"
              disabled
              value={amount3}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount4"
              type="number"
              placeholder="Amount"
              disabled
              value={amount4}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount5"
              type="number"
              placeholder="Amount"
              disabled
              value={amount5}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount5"
              type="number"
              placeholder="Amount"
              disabled
              value={thbamount}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Dyes Name
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Quantity
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dquantity1"
              type="number"
              onFocus={handleFocus}
              value={dquantity1}
              onChange={(e) => setdQuantity1(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dquantity2"
              type="number"
              onFocus={handleFocus}
              value={dquantity2}
              onChange={(e) => setdQuantity2(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dquantity3"
              type="number"
              onFocus={handleFocus}
              value={dquantity3}
              onChange={(e) => setdQuantity3(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dquantity4"
              type="number"
              onFocus={handleFocus}
              value={dquantity4}
              onChange={(e) => setdQuantity4(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="dquantity5"
              type="number"
              onFocus={handleFocus}
              value={dquantity5}
              onChange={(e) => setdQuantity5(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Rate
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="drate1"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={drate1}
              onChange={(e) => setdRate1(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="drate2"
              type="number"
              placeholder="dRate2"
              onFocus={handleFocus}
              value={drate2}
              onChange={(e) => setdRate2(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="drate3"
              type="number"
              placeholder="dRate2"
              onFocus={handleFocus}
              value={drate3}
              onChange={(e) => setdRate3(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="drate4"
              type="number"
              placeholder="dRate4"
              onFocus={handleFocus}
              value={drate4}
              onChange={(e) => setdRate4(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="drate5"
              type="number"
              placeholder="dRate2"
              onFocus={handleFocus}
              value={drate5}
              onChange={(e) => setdRate5(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Amount
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="damount1"
              type="number"
              placeholder="Amount"
              disabled
              value={damount1}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="damount2"
              type="number"
              placeholder="Amount"
              disabled
              value={damount2}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="damount3"
              type="number"
              placeholder="Amount"
              disabled
              value={damount3}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="damount4"
              type="number"
              placeholder="Amount"
              disabled
              value={damount4}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="damount5"
              type="number"
              placeholder="Amount"
              disabled
              value={damount5}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount5"
              type="number"
              placeholder="Amount"
              disabled
              value={tdamount}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-md text-green-800 font-semibold mb-1">
              Dyeing Chemical Name
            </label>
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
                  ? chemicalNames.map((dye: ChemicalI) => {
                      return {
                        value: dye.chemicalname,
                        label: dye.chemicalname,
                      };
                    })
                  : []
              }
            />
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
                  ? chemicalNames.map((dye: ChemicalI) => {
                      return {
                        value: dye.chemicalname,
                        label: dye.chemicalname,
                      };
                    })
                  : []
              }
            />
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
                  ? chemicalNames.map((dye: ChemicalI) => {
                      return {
                        value: dye.chemicalname,
                        label: dye.chemicalname,
                      };
                    })
                  : []
              }
            />
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
                  ? chemicalNames.map((dye: ChemicalI) => {
                      return {
                        value: dye.chemicalname,
                        label: dye.chemicalname,
                      };
                    })
                  : []
              }
            />
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
                  ? chemicalNames.map((dye: ChemicalI) => {
                      return {
                        value: dye.chemicalname,
                        label: dye.chemicalname,
                      };
                    })
                  : []
              }
            />
          </div>
          <div className="text-center">
            <Select
              className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
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
                  ? chemicalNames.map((dye: ChemicalI) => {
                      return {
                        value: dye.chemicalname,
                        label: dye.chemicalname,
                      };
                    })
                  : []
              }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Quantity
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity6"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity6}
              onChange={(e) => setQuantity6(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity7"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity7}
              onChange={(e) => setQuantity7(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity8"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity8}
              onChange={(e) => setQuantity8(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity9"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity9}
              onChange={(e) => setQuantity9(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity10"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity10}
              onChange={(e) => setQuantity10(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity11"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity11}
              onChange={(e) => setQuantity11(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="quantity12"
              type="number"
              placeholder="Quantity"
              onFocus={handleFocus}
              value={quantity12}
              onChange={(e) => setQuantity12(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Rate
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate6"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate6}
              onChange={(e) => setRate6(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate7"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate7}
              onChange={(e) => setRate7(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate8"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate8}
              onChange={(e) => setRate8(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate9"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate9}
              onChange={(e) => setRate9(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate10"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate10}
              onChange={(e) => setRate10(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate11"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate11}
              onChange={(e) => setRate11(Number(e.target.value))}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="rate12"
              type="number"
              placeholder="Rate"
              onFocus={handleFocus}
              value={rate12}
              onChange={(e) => setRate12(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center">
            <label className="block text-xl text-green-800 font-semibold mb-1">
              Amount
            </label>
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount6"
              type="number"
              placeholder="Amount"
              disabled
              value={amount6}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount7"
              type="number"
              placeholder="Amount"
              disabled
              value={amount7}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount8"
              type="number"
              placeholder="Amount"
              disabled
              value={amount8}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount9"
              type="number"
              placeholder="Amount"
              disabled
              value={amount9}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount10"
              type="number"
              placeholder="Amount"
              disabled
              value={amount10}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount11"
              type="number"
              placeholder="Amount"
              disabled
              value={amount11}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount12"
              type="number"
              placeholder="Amount"
              disabled
              value={amount12}
            />
          </div>
          <div className="text-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="amount12"
              type="number"
              placeholder="Amount"
              disabled
              value={tdchamount}
            />
          </div>
        </div>
        <div
          className="max-width-full text-white 
       grid lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2 md:mx-[50px] sm:mx-6 mx-3 mt-5"
        >
          <button
            onClick={onFinish}
            className="bg-red-600 w-44 h-12 border-2 mb-11 border-gray-600 rounded-full drop-shadow-xl shadow-inner transition-all duration-150 opacity-95  bg-[linear-gradient(#ffffff99,ffffff00_50%,#ffffff33)] before:contents-[''] before:block before:absolute before:right-2 before:left-2 before:top-0.5 before:h-4"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
