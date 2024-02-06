"use client";

import { publicAPI } from "../../../config/constants";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaAd, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { Select } from "antd";
// import moment from "moment";
import { PartyI } from "../../types/interface/partyName";
import { QualityI } from "../../types/interface/quality";
//import { MachineNoI } from "@/app/types/interface/machineNo";
import { PonoI } from "../../types/interface/pono";
import { ProcessI } from "../../types/interface/process";
import { ColorI } from "../../types/interface/color";
import { CostingSheetI } from "../../types/interface/costingSheet";
import { handleFocus } from "../../../utils/globalFunctions";
import { ChemicalI } from "../../types/interface/chemicalName";
import { DyesI } from "../../types/interface/dyesName";
import withAuth from "@/utils/withAuth";
import { HBChemicalI } from "@/app/types/interface/HBChemical";
import { dyesNameConsumptionI } from "@/app/types/interface/dyesNameConsumption";
import { DyeingChemicalI } from "@/app/types/interface/DyeingChemical";

const Page = () => {
  const [dyeingdate, setDyeingDate] = useState<string>("");
  const [lotno, setLotNo] = useState<string>("");
  const [partyname, setPartyName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [quality, setQuality] = useState<string>("");
  //const [machineno, setMachineNo] = useState<string>("");
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
  //const [machinenos, setMachineNos] = useState<Array<MachineNoI>>([]);
  const [processes, setProcesses] = useState<Array<ProcessI>>([]);
  const [colors, setColors] = useState<Array<ColorI>>([]);
  const [chemicalNames, setChemicalNames] = useState<Array<ChemicalI>>([]);
  const [dyesNames, setDyesNames] = useState<Array<DyesI>>([]);
  const [onEdit, setOnEdit] = useState<CostingSheetI | null>(null);

  const [HBchemical, setHBChemical] = useState<Array<HBChemicalI>>([
    {
      dyeingdate,
      lotno,
      chemicalname: "",
      quantity: 0,
      rate: 0,
      amount: 0,
    },
  ]);
  useEffect(() => {
    setHBChemical(
      HBchemical.map((c: any) => ({
        dyeingdate,
        lotno,
        chemicalname: c?.chemicalname,
        quantity: c?.quantity,
        rate: c?.rate,
        amount: c?.amount,
      }))
    );
    setDyesName(
      dyesName.map((c: any) => ({
        dyeingdate,
        lotno,
        dyesname: c?.dyesname,
        quantity: c?.quantity,
        rate: c?.rate,
        amount: c?.amount,
      }))
    );
    setDyeingChemical(
      dyeingChemical.map((c: any) => ({
        dyeingdate,
        lotno,
        chemicalname: c?.chemicalname,
        quantity: c?.quantity,
        rate: c?.rate,
        amount: c?.amount,
      }))
    );
  }, [dyeingdate, lotno]);

  const [dyesName, setDyesName] = useState<Array<dyesNameConsumptionI>>([
    {
      dyeingdate,
      lotno,
      dyesname: "",
      quantity: 0,
      rate: 0,
      amount: 0,
    },
  ]);
  const [dyeingChemical, setDyeingChemical] = useState<Array<DyeingChemicalI>>([
    { dyeingdate, lotno, chemicalname: "", quantity: 0, rate: 0, amount: 0 },
  ]);
  const [thbamount, setTHBAmount] = useState<number>(0);

  const [tdamount, setTDAmount] = useState<number>(0);

  const [tdchamount, setTDCHAmount] = useState<number>(0);

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
          HBchemical: HBchemical[0].chemicalname == "" ? [] : HBchemical,
          dyesName: dyesName[0].dyesname == "" ? [] : dyesName,
          dyeingChemical:
            dyeingChemical[0].chemicalname == "" ? [] : dyeingChemical,
        })
        .then(({ data }) => {
          getCostingSheet();
          setHBChemical([
            {
              dyeingdate,
              lotno,
              chemicalname: "",
              quantity: 0,
              rate: 0,
              amount: 0,
            },
          ]);
          setDyesName([
            {
              dyeingdate,
              lotno,
              dyesname: "",
              quantity: 0,
              rate: 0,
              amount: 0,
            },
          ]);
          setDyeingChemical([
            {
              dyeingdate,
              lotno,
              chemicalname: "",
              quantity: 0,
              rate: 0,
              amount: 0,
            },
          ]);
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
  const handleAddHBChemical = () => {
    console.log("--------------->");
    setHBChemical([
      ...HBchemical,
      { dyeingdate, lotno, chemicalname: "", quantity: 0, rate: 0, amount: 0 },
    ]);
  };
  const handleAddDyeingChemical = () => {
    console.log("--------------->");
    setDyeingChemical([
      ...dyeingChemical,
      {
        dyeingdate,
        lotno,
        chemicalname: "",
        quantity: 0,
        rate: 0,
        amount: 0,
      },
    ]);
  };
  const handleAddDyes = () => {
    console.log("--------------->");
    setDyesName([
      ...dyesName,
      {
        dyeingdate,
        lotno,
        dyesname: "",
        quantity: 0,
        rate: 0,
        amount: 0,
      },
    ]);
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
    setHalfBleachCost(
      Number((Number(thbamount) / Number(weightkg)).toFixed(2))
    );
  }, [thbamount, weightkg]);

  useEffect(() => {
    setDyesCost(Number((Number(tdamount) / Number(weightkg)).toFixed(2)));
  }, [tdamount, weightkg]);

  useEffect(() => {
    setDyeingChemicalCost(
      Number((Number(tdchamount) / Number(weightkg)).toFixed(2))
    );
  }, [tdchamount, weightkg]);

  useEffect(() => {
    setTotalCost(
      // Number(halfbleachcost) + Number(dyescost) + Number(dyeingchemicalcost)
      Number(
        (
          Number(halfbleachcost) +
          Number(dyescost) +
          Number(dyeingchemicalcost)
        ).toFixed(2)
      )
    );
  }, [halfbleachcost, dyescost, dyeingchemicalcost]);

  const changePropertyByIndex = (
    arr: any,
    index: any,
    propertyName: any,
    newValue: any
  ) => {
    if (index >= 0 && index < arr.length) {
      // Create a new object with the updated property
      console.log("🚀 ~ file: page.tsx:428 ~ Page ~ newValue:", newValue);
      console.log(
        "🚀 ~ file: page.tsx:432 ~ Page ~",
        ["chemicalname", "dyesname"].includes(propertyName)
      );
      const updatedObject = ["chemicalname", "dyesname"].includes(propertyName)
        ? {
            ...arr[index],
            [propertyName]: newValue.name,
            rate: newValue.rate,
            amount:
              propertyName == "quantity"
                ? newValue * newValue.rate
                : propertyName == "rate"
                ? newValue * arr[index]?.quantity
                : arr[index]?.quantity * newValue.rate,
          }
        : {
            ...arr[index],
            [propertyName]: newValue,
            amount:
              propertyName == "quantity"
                ? newValue * arr[index]?.rate
                : propertyName == "rate"
                ? newValue * arr[index]?.quantity
                : arr[index]?.quantity * arr[index]?.rate,
          };

      console.log(
        "🚀 ~ file: page.tsx:436 ~ Page ~ updatedObject:",
        updatedObject
      );
      // Create a new array with the updated object at the same position
      const newArray = [
        ...arr.slice(0, index),
        updatedObject,
        ...arr.slice(index + 1),
      ];

      return newArray;
    }

    // If the index is out of bounds, return the original array
    return arr;
  };
  useEffect(() => {
    setTHBAmount(HBchemical.reduce((a: any, b: any) => a + b.amount, 0));
  }, [HBchemical]);
  useEffect(() => {
    setTDAmount(dyesName.reduce((a: any, b: any) => a + b.amount, 0));
  }, [dyesName]);
  useEffect(() => {
    setTDCHAmount(dyeingChemical.reduce((a: any, b: any) => a + b.amount, 0));
  }, [dyeingChemical]);

  const handleEdit = (item: any) => {
    setOnEdit(item);
  };

  return (
    <div>
      <div className="container max-w-5xl mx-auto shadow-2xl">
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
                value={totalcost?.toFixed(2)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mx-[50px] sm:mx-6 mx-3">
          {HBchemical.map((c: any, i: any) => (
            <div
              key={i}
              className="max-width-full text-white 
          grid lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2  mt-5"
            >
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      HB Chemical Name
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <Select
                    className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
                    showSearch
                    placeholder="Select a chemical"
                    value={c?.chemicalname}
                    optionFilterProp="children"
                    onChange={(value) => {
                      setHBChemical(
                        changePropertyByIndex(HBchemical, i, "chemicalname", {
                          rate: chemicalNames.find(
                            (chamical) => chamical.chemicalname === value
                          )?.rate,
                          name: value,
                        })
                      );
                    }}
                    filterOption={(input, option) =>
                      String(option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={
                      chemicalNames?.length > 0
                        ? chemicalNames.map((chemical: ChemicalI, i) => {
                            return {
                              key: i,
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
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Quantity
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="dquantity1"
                    type="number"
                    onFocus={handleFocus}
                    value={c?.quantity}
                    onChange={(e) =>
                      setHBChemical(
                        changePropertyByIndex(
                          HBchemical,
                          i,
                          "quantity",
                          Number(e.target.value)
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Rate
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="rate"
                    type="number"
                    placeholder="Rate"
                    disabled
                    onFocus={handleFocus}
                    value={c?.rate}
                    onChange={(e) =>
                      setHBChemical(
                        changePropertyByIndex(
                          HBchemical,
                          i,
                          "rate",
                          Number(e.target.value)
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Amount
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="amount"
                    type="number"
                    placeholder="Amount"
                    disabled
                    value={c?.amount}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between   lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2  mt-5">
            <button onClick={handleAddHBChemical}>
              <FaPlus className="text-white bg-blue-700 rounded w-15 h-15 "></FaPlus>
            </button>
            <div className="text-center">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="amount"
                type="number"
                placeholder="Amount"
                disabled
                value={thbamount?.toFixed(2)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mx-[50px] sm:mx-6 mx-3">
          {dyesName.map((c: any, i: any) => (
            <div
              key={i}
              className="max-width-full text-white 
          grid lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2  mt-5"
            >
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Dyes Name
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <Select
                    className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
                    showSearch
                    placeholder="Select a chemical"
                    value={c?.dyesname}
                    optionFilterProp="children"
                    onChange={(value) =>
                      setDyesName(
                        changePropertyByIndex(dyesName, i, "dyesname", {
                          rate: dyesNames.find(
                            (dyes) => dyes.dyesname === value
                          )?.rate,
                          name: value,
                        })
                      )
                    }
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
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Quantity
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="dquantity1"
                    type="number"
                    onFocus={handleFocus}
                    value={c?.quantity}
                    onChange={(e) =>
                      setDyesName(
                        changePropertyByIndex(
                          dyesName,
                          i,
                          "quantity",
                          Number(e.target.value)
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Rate
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="rate"
                    type="number"
                    disabled
                    placeholder="Rate"
                    onFocus={handleFocus}
                    value={c?.rate}
                    onChange={(e) =>
                      setDyesName(
                        changePropertyByIndex(
                          dyesName,
                          i,
                          "rate",
                          Number(e.target.value)
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Amount
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="amount"
                    type="number"
                    placeholder="Amount"
                    disabled
                    value={c?.amount}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between   lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2  mt-5">
            <button onClick={handleAddDyes}>
              <FaPlus className="text-white bg-blue-700 rounded w-15 h-15 "></FaPlus>
            </button>
            <div className="text-center">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="amount"
                type="number"
                placeholder="Amount"
                disabled
                value={tdamount?.toFixed(2)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mx-[50px] sm:mx-6 mx-3">
          {dyeingChemical.map((c: any, i: any) => (
            <div
              key={i}
              className="max-width-full text-white 
          grid lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2  mt-5"
            >
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Dying Chemical Name
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <Select
                    className="appearance-none block bg-gray-200 w-full text-gray-700 border border-red-500 rounded mb-3 leading-tight focus:outline-none focus:bg-green-100 md:w-[225px] h-11"
                    showSearch
                    placeholder="Select a chemical"
                    value={c?.chemicalname}
                    optionFilterProp="children"
                    onChange={(value) =>
                      setDyeingChemical(
                        changePropertyByIndex(
                          dyeingChemical,
                          i,
                          "chemicalname",
                          {
                            rate: chemicalNames.find(
                              (chamical) => chamical.chemicalname === value
                            )?.rate,
                            name: value,
                          }
                        )
                      )
                    }
                    filterOption={(input, option) =>
                      String(option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={
                      chemicalNames?.length > 0
                        ? chemicalNames.map((chemical: ChemicalI, i) => {
                            return {
                              key: i,
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
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Quantity
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="dquantity1"
                    type="number"
                    onFocus={handleFocus}
                    value={c?.quantity}
                    onChange={(e) =>
                      setDyeingChemical(
                        changePropertyByIndex(
                          dyeingChemical,
                          i,
                          "quantity",
                          Number(e.target.value)
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Rate
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="rate"
                    type="number"
                    disabled
                    placeholder="Rate"
                    onFocus={handleFocus}
                    value={c?.rate}
                    onChange={(e) =>
                      setDyeingChemical(
                        changePropertyByIndex(
                          dyeingChemical,
                          i,
                          "rate",
                          Number(e.target.value)
                        )
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-center">
                  {i == 0 && (
                    <label className="block text-xl text-green-800 font-semibold mb-1">
                      Amount
                    </label>
                  )}
                </div>
                <div className="text-center">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="amount"
                    type="number"
                    placeholder="Amount"
                    disabled
                    value={c?.amount}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between   lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2  mt-5">
            <button onClick={handleAddDyeingChemical}>
              <FaPlus className="text-white bg-blue-700 rounded w-15 h-15 "></FaPlus>
            </button>
            <div className="text-center">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="amount"
                type="number"
                placeholder="Amount"
                disabled
                value={tdchamount?.toFixed(2)}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className="max-width-full text-white 
       grid lg:grid-cols-4 gap-3 md:grid-cols-2 sm:grid-cols-2 md:mx-[50px] sm:mx-6 mx-3 mt-5"
          >
            <button
              onClick={onFinish}
              className="bg-red-600 w-44 text-white h-12 border-2 mb-11 border-gray-600 rounded-full drop-shadow-xl shadow-inner transition-all duration-150 opacity-95  bg-[linear-gradient(#ffffff99,ffffff00_50%,#ffffff33)] before:contents-[''] before:block before:absolute before:right-2 before:left-2 before:top-0.5 before:h-4"
            >
              Save
            </button>
          </div>
        </div>
        <div className="h-full w-9/12 bg-slate-400 mx-auto">
          <div className="h-60 w-full grid gap-2 p-2 grid-cols-2 grid-rows-2">
            <div className="col-span-2 row-span-2 rounded-xl bg-white overflow-auto">
              <table className="table-auto w-full">
                <thead className="sticky top-0 bg-gray-700 text-white">
                  <tr>
                    <th className="bg-red-700 text-white py-4">Date</th>
                    <th className="bg-red-700 text-white py-4">Lot No</th>
                    <th className="bg-red-700 text-white py-4">Party Name</th>
                    <th className="bg-red-700 text-white py-4">Color</th>
                    <th className="bg-red-700 text-white py-4">Quality</th>
                    <th className="bg-red-700 text-white py-4">PO No</th>
                    <th className="bg-red-700 text-white py-4">Process</th>
                    <th className="bg-red-700 text-white py-4">Weight Kg</th>
                    <th className="bg-red-700 text-white py-4">HB Cost</th>
                    <th className="bg-red-700 text-white py-4">Dyes Cost</th>
                    <th className="bg-red-700 text-white py-4">
                      Dyeing Ch Cost
                    </th>
                    <th className="bg-red-700 text-white py-4">Total Cost</th>
                    <th className="bg-red-700 text-white py-4">Edit</th>
                    <th className="bg-red-700 text-white py-4">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {costingSheet?.map((item: any, i: any) => (
                    <tr key={i}>
                      <td width="30%">{item?.dyeingdate}</td>
                      <td width="20%">{item?.lotno}</td>
                      <td width="20%">{item?.partyname}</td>
                      <td width="20%">{item?.color}</td>
                      <td width="20%">{item?.quality}</td>
                      <td width="20%">{item?.pono}</td>
                      <td width="20%">{item?.process}</td>
                      <td width="20%">{item?.weightkg}</td>
                      <td width="20%">{item?.halfbleachcost}</td>
                      <td width="20%">{item?.dyescost}</td>
                      <td width="20%">{item?.dyeingchemicalcost}</td>
                      <td width="20%">{item?.totalcost}</td>
                      <td width="10%">
                        <FaEdit onClick={() => handleEdit(item)} />
                      </td>
                      {/* <td width="10%">
                      <FaTrash onClick={() => handleDelete(item._id)} />
                    </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
