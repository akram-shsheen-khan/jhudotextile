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
import { FabricIssuedI } from "../types/interface/fabricIssued";
import { handleFocus } from "../utils/globalFunctions";

export default function Page() {
  const [issueddate, setIssuedDate] = useState<string>("");
  const [partyname, setPartyName] = useState<string>("");
  const [challanno, setChallanNo] = useState<string>("");
  const [pono, setPono] = useState<string>("");
  const [lotno, setLotNo] = useState<string>("");
  const [process, setProcess] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [quality, setQuality] = useState<string>("");
  const [roll, setRoll] = useState<number>(0);
  const [deliveredweight, setDeliveredWeight] = useState<number>(0);
  const [wastageweight, setWastageWeight] = useState<number>(0);
  const [billingweight, setBillingWeight] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [fabricIssued, setFabricIssued] = useState<Array<FabricIssuedI>>([]);
  const [partyNames, setPartyNames] = useState<Array<PartyI>>([]);
  const [ponos, setPonos] = useState<Array<PonoI>>([]);
  const [qualities, setQualities] = useState<Array<QualityI>>([]);
  const [processes, setProcesses] = useState<Array<ProcessI>>([]);
  const [colors, setColors] = useState<Array<ColorI>>([]);
  const [onEdit, setOnEdit] = useState<FabricIssuedI | null>(null);

  const onFinish = () => {
    if (onEdit) {
      axios
        .put("http://localhost:3000/api/fabricIssued", {
          id: onEdit._id,
          payload: {
            issueddate,
            partyname,
            challanno,
            pono,
            process,
            color,
            quality,
            lotno,
            roll,
            deliveredweight,
            wastageweight,
            billingweight,
            rate,
            amount,
          },
        })
        .then(({ data }) => {
          getFabricIssued();
          toast.success(data);
        })
        .catch(({ data }) => toast.error(data));
    } else {
      axios
        .post("http://localhost:3000/api/fabricIssued", {
          issueddate,
          partyname,
          challanno,
          pono,
          process,
          color,
          quality,
          lotno,
          roll,
          deliveredweight,
          wastageweight,
          billingweight,
          rate,
          amount,
        })
        .then(({ data }) => {
          getFabricIssued();

          toast.success(data);
          console.log(data);
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
    setOnEdit(null);
    setIssuedDate("");
    setPartyName("");
    setChallanNo("");
    setPono("");
    setProcess("");
    setColor("");
    setQuality("");
    setLotNo("");
    setRoll(0);
    setDeliveredWeight(0);
    setWastageWeight(0);
    setBillingWeight(0);
    setRate(0);
    setAmount(0);
  };
  const handleEdit = (item: FabricIssuedI) => {
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
    axios
      .patch(`http://localhost:3000/api/fabricIssued`, { id })
      .then(({ data }) => {
        getFabricIssued();

        toast.success(data);
        console.log(data);
      })
      .catch(({ data }) => {
        toast.error(data);
      });

    setOnEdit(null);
    setIssuedDate("");
    setPartyName("");
    setChallanNo("");
    setPono("");
    setProcess("");
    setColor("");
    setQuality("");
    setLotNo("");
    setRoll(0);
    setDeliveredWeight(0);
    setWastageWeight(0);
    setBillingWeight(0);
    setRate(0);
    setAmount(0);
  };

  useEffect(() => {
    if (onEdit) {
      setIssuedDate(String(onEdit.issueddate));
      setPartyName(String(onEdit.partyname));
      setChallanNo(String(onEdit.challanno));
      setPono(String(onEdit.pono));
      setProcess(String(onEdit.process));
      setColor(String(onEdit.color));
      setQuality(String(onEdit.quality));
      setLotNo(String(onEdit.lotno));
      setRoll(Number(onEdit.roll));
      setDeliveredWeight(Number(onEdit.deliveredweight));
      setWastageWeight(Number(onEdit.wastageweight));
      setBillingWeight(Number(onEdit.billingweight));
      setRate(Number(onEdit.rate));
      setAmount(Number(onEdit.amount));
    }
  }, [onEdit]);

  const getFabricIssued = async () => {
    try {
      fetch("http://localhost:3000/api/fabricIssued")
        .then((res) => res.json())
        .then((data) => {
          setFabricIssued(data);
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

  useEffect(() => {
    getFabricIssued();
    getPartyNames();
    getPonos();
    getProcesses();
    getQualities();
    getColors();
  }, []);

  return (
    <div>
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <h1 className="mt-4 text-lg leading-7 text-green-500 font-bold uppercase">
            Fabric Issued Form
          </h1>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            JHUDO <span className="text-indigo-600">TEXTILE</span>
          </h3>
        </div>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="issueddate"
                type="date"
                value={issueddate}
                onChange={(e) => setIssuedDate(e.target.value)}
                placeholder="Date"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Party Lot No
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="partylotno"
                type="text"
                value={lotno}
                onChange={(e) => setLotNo(e.target.value)}
                placeholder="Lot No"
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Challan No
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="challanno"
                  type="text"
                  value={challanno}
                  onChange={(e) => setChallanNo(e.target.value)}
                  placeholder="Challan No"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Color
                </label>

                <Select
                  style={{ width: "350px", height: "48px" }}
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
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Party Name
              </label>
              <Select
                style={{
                  width: "350px",
                  height: "48px",
                  appearance: "none",
                }}
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
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                PO NO
              </label>

              <Select
                style={{ width: "350px", height: "48px" }}
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

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Quality
              </label>
              <Select
                style={{
                  width: "350px",
                  height: "48px",
                  appearance: "none",
                }}
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
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Process
              </label>

              <Select
                style={{ width: "350px", height: "48px" }}
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

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Roll
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="roll"
                type="number"
                placeholder="Roll"
                onFocus={handleFocus}
                value={roll}
                onChange={(e) => setRoll(Number(e.target.value))}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Delivered Weight
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="deliveredweight"
                type="number"
                placeholder="Delivered Weight"
                onFocus={handleFocus}
                value={deliveredweight}
                onChange={(e) => setDeliveredWeight(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Wastage Weight
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="wastageweight"
                type="number"
                placeholder="Wastage Weight"
                onFocus={handleFocus}
                value={wastageweight}
                onChange={(e) => setWastageWeight(Number(e.target.value))}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Billing Weight
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="billingweight"
                type="number"
                placeholder="Billing Weight"
                onFocus={handleFocus}
                value={billingweight}
                onChange={(e) => setBillingWeight(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Rate
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="rate"
                type="number"
                placeholder="Rate"
                onFocus={handleFocus}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Amount
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="amount"
                type="number"
                placeholder="amount"
                onFocus={handleFocus}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="flex justify-between w-full px-3">
              <button
                onClick={onFinish}
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="button"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="grid2">
        <div className="grid-container2">
          <table>
            <thead>
              <tr className="header2">
                <th>
                  Date<div>Date</div>
                </th>
                <th>
                  Party Name<div>Party Name</div>
                </th>
                <th>
                  Challan No<div>Challan No</div>
                </th>
                <th>
                  PO NO<div>PO NO</div>
                </th>
                <th>
                  Lot No<div>Lot No</div>
                </th>
                <th>
                  Process<div>Process</div>
                </th>
                <th>
                  Color<div>Color</div>
                </th>
                <th>
                  Quality<div>Quality</div>
                </th>
                <th>
                  Edit<div>Edit</div>
                </th>
                <th>
                  Delete<div>Delete</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {fabricIssued?.map((item: FabricIssuedI) => (
                <tr key={item._id}>
                  <td width="20%">{item?.issueddate}</td>
                  <td width="15%">{item?.partyname}</td>
                  <td width="15%">{item?.challanno}</td>
                  <td width="15%">{item?.pono}</td>
                  <td width="15%">{item?.lotno}</td>
                  <td width="15%">{item?.process}</td>
                  <td width="15%">{item?.color}</td>
                  <td width="10%">{item?.quality}</td>
                  <td width="5%">
                    <FaEdit onClick={() => handleEdit(item)} />
                  </td>
                  <td width="5%">
                    <FaTrash onClick={() => handleDelete(item._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
