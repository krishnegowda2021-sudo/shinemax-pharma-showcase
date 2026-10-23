import diabetologyImg from "@/assets/uploads_service_01.png.asset.json";
import cardiologyImg from "@/assets/uploads_service_02.png.asset.json";
import generalImg from "@/assets/uploads_service_03.png.asset.json";

export type CategorySlug = "diabetology" | "cardiology" | "general-medicine";

export type Product = {
  id: string;
  name: string;
  composition: string;
  form: string;
  category: CategorySlug;
  image: string;
};

export const categories: {
  slug: CategorySlug;
  name: string;
  summary: string;
  image: string;
}[] = [
  {
    slug: "diabetology",
    name: "Diabetology",
    summary:
      "Oral anti-diabetic therapies including DPP-4 inhibitors, SGLT2 inhibitors, sulfonylurea combinations and alpha-glucosidase inhibitors.",
    image: diabetologyImg.url,
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    summary:
      "Antihypertensive and lipid-lowering therapies built on telmisartan, amlodipine and rosuvastatin, alone and in combination.",
    image: cardiologyImg.url,
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    summary:
      "Gastro care, neuro-vitamin support, iron and vitamin D supplementation, and nutritional protein powders.",
    image: generalImg.url,
  },
];

export const products: Product[] = [
  {
    "id": "01",
    "name": "Rosuvamax 10",
    "composition": "Rosuvastatin 10 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/48e33cc2-53fe-470a-adbd-62611addfd7d/product-01.png"
  },
  {
    "id": "02",
    "name": "Rosuvamax F",
    "composition": "Rosuvastatin 10 mg + Fenofibrate 160 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/e970dbc2-afa0-41e6-b73b-3ab503e4ad64/product-02.png"
  },
  {
    "id": "03",
    "name": "Rosuvamax Gold",
    "composition": "Rosuvastatin 10 mg + Aspirin 75 mg + Clopidogrel 75 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/443c1ed2-82f1-4707-9d19-6c384bb966b8/product-03.png"
  },
  {
    "id": "04",
    "name": "Pioshine 15",
    "composition": "Pioglitazone 15 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/24ba9663-5823-4bc5-9ef5-1972242b81ce/product-04.png"
  },
  {
    "id": "05",
    "name": "Dapaflex 10 / Dapaflex M",
    "composition": "Dapagliflozin 10 mg \u00b7 Dapagliflozin 10 mg + Metformin 500 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/2d7c782e-a02b-4708-b634-967085b81c85/product-05.png"
  },
  {
    "id": "06",
    "name": "Dapaflex S",
    "composition": "Dapagliflozin 10 mg + Sitagliptin 100 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/268bdfc8-45d0-4082-8d25-416b3dcbd0e7/product-06.png"
  },
  {
    "id": "07",
    "name": "Vildarose 50",
    "composition": "Vildagliptin 50 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/067e3582-1397-4c37-9cf3-aa465294b5b6/product-07.png"
  },
  {
    "id": "08",
    "name": "Vildarose-M 500",
    "composition": "Vildagliptin 50 mg + Metformin 500 mg SR",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/08fd32c0-6c64-476d-8cd7-9e742269090a/product-08.png"
  },
  {
    "id": "09",
    "name": "Glimeshine M1",
    "composition": "Glimepiride 1 mg + Metformin HCl 500 mg SR",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/261cfdcf-ac4d-49f3-83e8-d9f23fd7c655/product-09.png"
  },
  {
    "id": "10",
    "name": "Glimeshine M2",
    "composition": "Glimepiride 2 mg + Metformin HCl 500 mg SR",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/c9ecbaa7-97f6-4d10-b24d-5e701984a01d/product-10.png"
  },
  {
    "id": "11",
    "name": "Glimeshine M1 Forte",
    "composition": "Glimepiride 1 mg + Metformin 1000 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/a7177f07-1cad-44fd-b0e1-6ee53551376f/product-11.png"
  },
  {
    "id": "12",
    "name": "Glimeshine M2 Forte",
    "composition": "Glimepiride 2 mg + Metformin 1000 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/f54b0e49-196c-4223-b209-0dc6388bd20d/product-12.png"
  },
  {
    "id": "13",
    "name": "Glimeshine MP1",
    "composition": "Glimepiride 1 mg + Metformin HCl 500 mg SR + Pioglitazone HCl 15 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/540d5b81-4442-4e19-87db-27111b137f39/product-13.png"
  },
  {
    "id": "14",
    "name": "Glimeshine MP2",
    "composition": "Glimepiride 2 mg + Metformin HCl 500 mg SR + Pioglitazone HCl 15 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/23c6ee1b-8953-4730-858c-925a696b47fa/product-14.png"
  },
  {
    "id": "15",
    "name": "Vogmax 0.2",
    "composition": "Voglibose 0.2 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/829afe2c-1b31-4dca-bf89-d64ace6b38c0/product-15.png"
  },
  {
    "id": "16",
    "name": "Vogmax 0.3",
    "composition": "Voglibose 0.3 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/94c686d1-717e-47ba-ba77-6fd4de74e8d4/product-16.png"
  },
  {
    "id": "17",
    "name": "Vogmax GM1",
    "composition": "Voglibose 0.2 mg + Glimepiride 1 mg + Metformin HCl 500 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/5eae21eb-d281-4737-98e8-1e3b49a92276/product-17.png"
  },
  {
    "id": "18",
    "name": "Vogmax GM2",
    "composition": "Voglibose 0.2 mg + Glimepiride 2 mg + Metformin HCl 500 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/a543b25d-7bea-454b-a629-4a2de5b555ac/product-18.png"
  },
  {
    "id": "19",
    "name": "Telmishine 20",
    "composition": "Telmisartan 20 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/37fd3fad-0c16-4103-82eb-c207225ad413/product-19.png"
  },
  {
    "id": "20",
    "name": "Telmishine 40",
    "composition": "Telmisartan 40 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/c4ba283d-9a26-43e4-babb-a3f68ad08ee0/product-20.png"
  },
  {
    "id": "21",
    "name": "Telmishine-H",
    "composition": "Telmisartan 40 mg + Hydrochlorothiazide 12.5 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/7ef7f76a-6e20-436c-9113-0c01a51fb8ef/product-21.png"
  },
  {
    "id": "22",
    "name": "Telmishine-AM",
    "composition": "Telmisartan 40 mg + Amlodipine 5 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/3847af0c-4fea-4a1d-9aec-816fb2aa2fb5/product-22.png"
  },
  {
    "id": "23",
    "name": "Telmishine-MT 25/50",
    "composition": "Telmisartan 40 mg + Metoprolol Succinate 25 mg / 50 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/41c7734a-6147-43ce-9071-a3715d7f3a3a/product-23.png"
  },
  {
    "id": "24",
    "name": "Telmishine-AMH",
    "composition": "Telmisartan 40 mg + Amlodipine 5 mg + Hydrochlorothiazide 12.5 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/23c88db2-710d-4947-89d4-c39ad78e6c76/product-24.png"
  },
  {
    "id": "25",
    "name": "Tenliflex 20",
    "composition": "Teneligliptin 20 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/8277f4f5-431c-4900-b195-89a3764a49b2/product-25.png"
  },
  {
    "id": "26",
    "name": "Tenliflex-M",
    "composition": "Teneligliptin 20 mg + Metformin 500 mg",
    "form": "Tablet",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/9a901316-4c61-40a0-afd4-0941fb2a36f6/product-26.png"
  },
  {
    "id": "27",
    "name": "Amlored 5",
    "composition": "Amlodipine Besylate 5 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/c525747d-89bb-4672-898f-d44267a57b75/product-27.png"
  },
  {
    "id": "28",
    "name": "Amlored AT",
    "composition": "Amlodipine Besylate 5 mg + Atenolol 50 mg",
    "form": "Tablet",
    "category": "cardiology",
    "image": "/__l5e/assets-v1/260c00bc-dfba-41d1-a32e-f0cd13523f5e/product-28.png"
  },
  {
    "id": "29",
    "name": "Rejushine OD",
    "composition": "Methylcobalamin 1500 mcg + ALA 100 mg + Folic Acid 1.5 mg + Pyridoxine 3 mg",
    "form": "Capsule",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/e5dd1d60-5f57-4b32-a6cc-4ab8ecd87a38/product-29.png"
  },
  {
    "id": "30",
    "name": "Rejushine PG",
    "composition": "Methylcobalamin 750 mcg + Pregabalin 75 mg SR",
    "form": "Capsule",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/7d1d21ec-eaf8-48a1-be61-f642ec48c4c7/product-30.png"
  },
  {
    "id": "31",
    "name": "Pancept 40",
    "composition": "Pantoprazole 40 mg",
    "form": "Tablet",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/96426879-54e9-4640-8319-559797b0bc66/product-31.png"
  },
  {
    "id": "32",
    "name": "Pancept DSR",
    "composition": "Pantoprazole 40 mg + Domperidone 30 mg SR",
    "form": "Capsule",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/48410124-e06f-483a-9cc7-3d2820a34f4d/product-32.png"
  },
  {
    "id": "33",
    "name": "Nutrishine",
    "composition": "Protein powder",
    "form": "Powder",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/d29e149b-6925-4dae-81ca-2602601e69a5/product-33.png"
  },
  {
    "id": "34",
    "name": "Nutrishine-D",
    "composition": "Diabetic protein powder",
    "form": "Powder",
    "category": "diabetology",
    "image": "/__l5e/assets-v1/d51d3164-e0bc-469c-84b0-afe1ea0b302e/product-34.png"
  },
  {
    "id": "35",
    "name": "Ferishine",
    "composition": "Ferrous Ascorbate eq. to elemental Iron 30 mg + Folic Acid 0.75 mg + Cyanocobalamin 6 mcg + Elemental Zinc 11 mg",
    "form": "Syrup",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/761521ee-7610-4e94-b594-ee39d5ffefb1/product-35.png"
  },
  {
    "id": "36",
    "name": "Ferishine-XT",
    "composition": "Ferrous Bisglycinate 60 mg + Zinc Bisglycinate 15 mg + Folic Acid 1 mg + Methylcobalamin 500 mcg",
    "form": "Tablet",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/e9293b63-62db-452b-a946-b491566754fa/product-36.png"
  },
  {
    "id": "37",
    "name": "D3-Bind",
    "composition": "Cholecalciferol 60,000 IU",
    "form": "Chewable tablet",
    "category": "general-medicine",
    "image": "/__l5e/assets-v1/886fca2f-d22f-4c5b-a019-ba4bc9e059df/product-37.png"
  }
];

export const company = {
  name: "Shinemax Pharma (I) Pvt Ltd",
  shortName: "Shinemax Pharma",
  founded: 2013,
  address: "65, 5th Cross, Maruthi Temple Road, Gangothri Layout, Mysuru, Karnataka 570009",
  email: "shinemaxpharmaceuticals@gmail.com",
  whatsapp: "919945832536",
  whatsappDisplay: "+91 99458 32536",
  mapsUrl: "https://maps.google.com/?cid=18084430092929372372",
};
