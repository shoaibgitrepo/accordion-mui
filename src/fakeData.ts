import _ from "lodash";

const orderLineItems = [
  {
    id: "c2714ca6-cd53-4ae9-bec2-784d12953493",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "71bca629-f988-408c-97dc-6edff49b3cc2",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f376b94d-e4f4-4bd3-8a48-7db36d6d6cee",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "810f698c-46da-4714-a09a-ccc8b3d3760e",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "42375827-3d00-4259-9665-0929f5ae7dbf",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ad106dba-0f07-453e-81a9-0dceec7505ac",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e821c20b-1e11-4159-94fe-9e377bcb24cb",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3dbdf5d4-a0e0-4de3-8d9e-c9ff159dbf38",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "34d79b5a-020e-4d85-86c2-9add2d82afde",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "417276ea-cf56-4ebd-8213-0daca0aedd85",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8e17c595-ab6a-45ec-9577-bffc4cddd2ec",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8ed65975-9fe3-471c-b14f-d5c4782d1899",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "eea7a136-4310-4e8a-a399-b375440d7660",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f421b465-df65-4dcd-b9d6-4ae40f8827a3",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6168ee7c-70d9-4b5c-b496-038f09386fe3",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e95bb7e9-3179-4d4e-bb05-8eb3259adbd2",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7a831e1a-efda-4592-ac85-3254bbba0774",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "454a59c7-b2c8-41ad-ad83-3e6c539375b1",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9e8870bf-7d7d-4663-8a11-f420cd6dd61d",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0c013669-8e0e-4d9f-8a48-949b4e52fdec",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "004b28c7-f3ce-4765-9a85-df56cd5f2783",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7c98cc64-2a39-4e97-8575-d30b515079da",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "56d1794c-4b14-410f-ad17-764dfe81ea6f",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "16b2dcd0-b51a-49c6-b7d4-de0110bb2aa0",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f0e96c6f-6bc8-485a-a351-9d689e14525e",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ee413375-5748-447b-a0a5-4b1e5c104746",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4b627f56-ae08-4e97-9db9-f2fac06fb945",
    status: "In Progress",
    diligenceName: "Name 1",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b48b833c-1518-45ea-9dcc-6dd67a7f3b60",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "477eff5d-9a46-4b78-a957-47f7fad42e0d",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cc78145f-27a2-4fdc-8649-18cf8ac3e130",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1e98c76d-24dd-4a4e-b77c-caaa4cbe94f5",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0e9f43b6-72e7-46a3-94dc-84aa7b470e5c",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "12fa0b98-2520-48bc-a34c-02e31413132a",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cfa798f3-2135-47af-99b6-a2c5f1082987",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "36c142b4-e9d7-47b8-a74b-962f9e53a643",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2b4d6f3-cd70-4fe0-bd7f-ce8259293f36",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7e1ec610-2188-4673-9310-1687e8852cf9",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ddbc6253-383f-4e9b-8c5d-ea01a2476345",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "df5b64d8-85a2-412e-8f42-89e9efde2767",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4790d5b3-3056-4d60-bb00-5c8891dfa5d1",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bcd2d06f-d52c-4276-a687-b6cce350cdc0",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0fad4f9d-e203-4b33-b4af-07c5ff1fa858",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "63ba432e-1676-4879-935b-edefcb502f13",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "af91336b-c20c-4a90-8037-7e00675f48a0",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "f0f6f609-b300-4ebb-b894-94eba60fa44a",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8d293664-f2c3-487a-8ac1-7cc0a01c39d7",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "307cf8c1-1fd7-4642-96ba-5c4c0102bc29",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "41395305-21ac-4137-b932-61d92734d086",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ccc1029d-c510-4e0f-bc94-333c9203350c",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7d4ecc77-7484-43f5-b2e4-109380b62651",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "090fa681-ce1e-4ef9-88a1-5dd3acc486aa",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a196de1a-27c0-441a-80f9-fde5cc226e0c",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "63208e8f-7a2a-41b8-84c4-9bb2a4d53777",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "429c5e51-0685-43f8-909d-691fbd13ac38",
    status: "In Progress",
    diligenceName: "Name 2",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8480c718-cbbe-47b2-a549-e80600c35a00",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cb769c7d-6465-44c8-af5b-59db28a5184b",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "daf6ecbe-6575-4d88-a00c-7806718f1ee7",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9ea4b8d1-0771-4ba7-8a47-6a0f194001e5",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ebd40093-0ddd-474b-ab9d-8554a180d68b",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "41da6a1f-bdd3-449a-a248-63eb2d6d7778",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "691720fe-687a-43f0-965f-4083387c3a77",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2ef12d7e-0129-41f9-a5f6-d7c845a8d462",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bb4abde3-4446-4887-9025-ac065107e437",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5411a2ce-341a-4039-a04d-051e2ddd4cff",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b4203363-6128-4887-a8ad-43ce18793564",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e632d627-d20c-407c-b914-87d6d1f5b883",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d6a1ddf7-253d-400f-bb3a-18882f7c93e1",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4182cb53-a4b9-4930-bad2-eb157726137e",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "41fe3af1-1b0d-48c9-844b-953861ad73ed",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "149bcb25-62e2-47d2-9296-6d6b0d998cdf",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "40dbf55e-16c4-41d8-8396-f32b5b67d0ac",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "b79f13fd-de51-4fd7-a4d2-7e2ab2856ace",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6c4df96a-6f33-450d-ab20-8411bf465130",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8fda3c29-d9b6-41f0-a17f-53bd1f0a72b9",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "59be7145-86f2-41cc-8584-97508ac677cd",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2a2945d2-1e74-4ce6-bd8c-78f550756ccd",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8d48438c-8e93-4e68-806c-10d97aab7b90",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0f382552-0f6a-43e4-a3f4-e1cd34638e71",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a608fc87-0599-42c3-9b37-f58b9b45b5ba",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d506ae0d-68fd-4485-a164-a2e9435e6f64",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "debec361-687a-4212-8e0c-afb8770c0239",
    status: "In Progress",
    diligenceName: "Name 3",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1f6128d6-8d32-4304-bc3c-a02ec460f2bf",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c4065ad5-459d-45f9-b132-e718a42f21c4",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7ae4ef9b-b6be-458d-bf49-ebba0000635f",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "24f94ebd-30e2-423d-bc75-830602d13035",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7a0c31b8-a5d9-40b8-83b7-03b111a27c43",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b085802c-4e11-4964-bbe1-4fc3839e25d6",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c35238fc-16d6-493f-b9bb-62ddfc06312b",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0749c361-aacc-45b8-86ce-e052d8eda30e",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "17f90c72-c20d-421a-8465-f8bd64dc0c3c",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f1a8b2ce-1d73-40f8-b14c-1b5c6b800487",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "15931f1d-3a94-4a10-b0db-e1192e317a18",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9733c4ed-ea42-476b-bf3f-2b6c762795cd",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1aab6c7c-86f4-4058-9ad7-4711b9ced845",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5db2c2e3-a39d-49a2-a655-a14a90fa4b3c",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "36acf9bb-57ea-43e5-a542-47b8828fbc15",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f7f244c4-17b0-485a-843b-d78dd6654aed",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4a85c67e-5352-47b3-83d3-4c2897ed8aea",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "ab0d5352-767a-421d-9245-f66ef876f45b",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4289dbe5-1793-4f96-9640-b991f790668f",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "06560ce0-1aea-4fa4-b523-8d868c204ced",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4f553329-d8c0-450b-baca-3524cd32e232",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "30df6d61-3fa1-43d3-9200-26066f13c250",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "02e0f153-c87e-44f7-aaee-092d8c02a1a9",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b177c21c-74a8-44c5-b8da-cd91d06485e7",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "51f96450-a088-4b8d-8b14-e33771191081",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "16892249-8389-449b-950c-b8990bd29b22",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "93ea4bc5-80b3-45bf-8fd4-3c9c3872d3f7",
    status: "In Progress",
    diligenceName: "Name 4",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "304c5a0f-10c1-4839-9569-835f135028c1",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9783bc7d-e344-439c-867a-7d49466799b1",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "aa6650f8-c4c1-48da-a1e1-b56f7b821069",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "23142efb-5373-4d08-a5d2-44413b3cc76e",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3487def7-a89f-44ca-9557-deba9c8b2e3e",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e1672d39-2810-4364-b6f7-0406438677cf",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "93af0739-2edb-482b-b8d2-0ecf257c44a6",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8459c02f-b53f-4cd2-9b23-01e1197d3b80",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bb3911f8-449a-4982-bc7f-a9f1b6b73c70",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4cf2c186-c3e2-4ee3-bbbb-9119eab1c168",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ccb533f6-2315-4f04-8f09-6f120e6b2d96",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a3e98cbb-d025-477f-86f1-98f179357906",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2ebc45ec-af36-4603-a137-534632740d45",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2e52d819-286f-4f7a-9d66-95165c37efea",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2743c4b1-dada-47d3-9586-67e32a0eb6f3",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4f34541c-483b-4d01-8277-5a48b775cf7e",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "46fb07b1-746d-42f8-81a1-6641a197943a",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "bb8433be-4e80-48ed-a3df-6e0b6a61077e",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "86d4cde4-d6f2-408f-a23c-bf389e04016a",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f3e8cbb2-2cc7-4852-9baa-78e28881bffe",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bb947639-e7b1-4ced-8d87-4dd4359c71b7",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a1cf1eff-8ba8-45b0-9574-bed06de84341",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "31a5c66c-5507-4d93-aae8-32816aed1c91",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5cf62080-b304-40c8-bc67-90303be762bb",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0d1fa37d-273c-4ec8-801f-064f37188593",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6b945e50-58c0-46d1-b742-4b8335701261",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8fbc075a-74fb-4b47-95ad-988a234ed2e8",
    status: "In Progress",
    diligenceName: "Name 5",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9d52388d-6654-4d2e-b8f5-3e9beae6ab4a",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c9d9355c-873e-4789-953d-56b66f2bcb9c",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "aa861574-5869-408c-b0bf-148f53267bfe",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1f9eafe4-783c-4b64-80f0-02fd30940e7a",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c4323d44-82df-45e8-a736-5636482b4420",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ce1773be-dff0-4420-82dd-0a3791d967e7",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f674b13c-c4ab-4141-931a-ae36ef91d586",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "10fb63d8-5984-4a91-8f7d-1540bcb0393e",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9df1ede2-60e4-4dd1-b672-7600ab92f691",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4e680a63-da2d-4f27-830c-1676c364eb37",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c5c9a643-12ec-4d07-b2ec-1712a38ae6fe",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a90c950a-44bc-4d94-a90d-69bae22a4300",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e3ddbd97-8da9-4a23-ba2a-ff006edb156d",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "24de6ded-750b-4a9c-82c7-b9350b84b30d",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a742f8df-5343-49a8-9fee-f7a78e4eb79e",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "39beec4e-4dfa-4864-910b-0fa0e48007b6",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "980bc679-0eb6-4d1e-b5cd-c2a2994eb9ef",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "527c29ce-e269-4c96-8617-df58c266e80d",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b6835ee5-a644-4fad-bcf0-32a32ca5f3e2",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "77e46c51-5dab-44c5-b645-7c9d7ef52fb9",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e5fdf9ec-891c-4d05-a8dc-506078e0cabd",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d103774c-ec3e-4e1b-8fd9-d8085c3e6463",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8141029d-4826-40c7-8103-f0734455f53c",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2699f64e-2e8c-473b-831c-fd3d92988e64",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4ba8e194-a22d-4946-b354-23e7471a6ab0",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "93e4c713-af96-4162-b7f6-c94e55c4d6c3",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6ec4cd73-3df2-44e2-92df-7a37abed2f83",
    status: "In Progress",
    diligenceName: "Name 6",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c4fbeec2-559e-48d9-8a12-f4908678f161",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ba5ff168-cea0-4b6c-858d-2063ca601247",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d153088a-df54-4489-b79b-71495266f1d1",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "79550d92-361f-4305-9763-c2311932d036",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6bc0cd56-c1a5-48e2-8ef5-fbc5d08a0b39",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "71dd24d5-f1e4-4e5b-84c1-e52687202c13",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3edce6ef-64f3-4b04-b68f-103935cb962e",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e51b89d9-973d-49ac-8edd-a95693e45533",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9caa8da8-3f18-4083-bc43-011a2fde14e2",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "81ae5095-5fe0-4b0f-a4d0-022be5e0f1c6",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8da82661-97fc-41b6-b8c8-e332f48f4775",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8a4071ef-2eaf-4026-835e-25d4175e350c",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ea29971d-34dd-498e-b4ab-38c200d97b6f",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9931f8b1-c434-4463-b9ca-4070b93703a7",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a6ff02d7-b2eb-4778-ac3f-6ddfd5edb564",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "fc8b6e2f-9756-4553-8068-4be870dda099",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "dab6bb40-958d-4601-a277-b6a1ef93a3e8",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "48411194-c0fc-4abc-bcb6-785ad7ef3c43",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "08ea498e-85c8-4c3a-9484-824e323924db",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e76b6849-303c-4efd-9a33-79c87ece7162",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "afa72537-4959-4b2e-8dac-a152ce3c2932",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7e0ca404-9cbf-487f-9aee-f08cd40ce7cd",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "96fdee18-659b-4275-9fc6-1da7199d36ff",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5c766dd2-eb21-4aee-87f4-159385c1d0c8",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b3b2aaa4-31c1-4fdb-bc2a-2f5b2693f506",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "25bb9055-5737-43f9-8c21-33685cef9a00",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0b374c81-54da-47d9-ad80-19265f331410",
    status: "In Progress",
    diligenceName: "Name 7",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c255d9f1-f1c5-447b-88c9-47a18d190654",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "73552106-8b6a-47f7-bb20-d95045cfa269",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1d14d653-003f-486c-a454-7f975aa74a99",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bfc8a77a-ccd6-4670-b92e-8f5172ec6b98",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "92c3f3b2-1156-41ee-b87b-7fa676d541ff",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5afa98e2-62a0-4398-88cd-c8a3ec2a7b49",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5657ca6b-47af-4180-bc59-b9dc2f481a95",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e9550af0-b893-43ff-9e64-ec23de4b5a18",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8e3724a2-6a39-4048-b884-88e38be8c7dc",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f7434a2b-fb0c-4440-ae4e-7bbca3ac4e85",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "cb884472-aeb1-44ef-aab7-8f5c8d8bda9b",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e43b6345-c132-4bf2-8b9d-1582227d4120",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "149bc845-7f9a-4caf-907a-2b96f70df4c6",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "dd6a5d13-c911-4dde-b87f-e20a2a4e54f9",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7602a014-ebcd-418d-99ac-90a55b3159e2",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "139dc2e1-a086-4745-b38b-c44b5d7d66d4",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bae0efcc-e3b1-4e0c-a868-4d2780ca60b8",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "95c87104-6925-4ee5-b662-b3e6d812bf0d",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d7b4880f-9e61-40ba-8ef7-9f4368f08b7a",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e30046f7-0245-4ddd-9ed0-c1ed2a60f6f7",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "94552202-4e68-4e6f-a2eb-ace682b448f8",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cf905dfd-9b45-472a-a0ec-d76705d7e392",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "52e16d9e-a506-4bf0-87a4-1365de1d35a8",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c4d1a5e1-7596-4b57-9883-38a6888dca3d",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "13144e85-7d20-4b94-b977-702b329edf13",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b7ffaec2-06ec-412f-917d-7c2d2561e93b",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "20ad41dc-e646-45e8-9de1-fa574b80f37a",
    status: "In Progress",
    diligenceName: "Name 8",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3d034945-28dc-428a-ab73-a1e470df05ac",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "61e161f9-cf96-4cd3-9121-1725b455de5f",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2f2a142e-8e7b-4f34-9b4b-6cec4e6aae0b",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d5254979-1745-4eef-b043-c696754c8021",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3c513417-d5c1-4dee-8811-780ee33f4df1",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "720670b0-55b4-468b-889d-fd5160f019e1",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0eb322b1-56c9-4e8e-b451-fac65608ea9b",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bd63388d-d3f0-4d63-9b2a-bb657339b953",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "954b657a-8c75-466f-91cd-e85103a34d53",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7d581820-4d1b-4ef3-bab1-4b3a05e7f062",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2a7eac2b-c9d9-49c5-8c5c-2e4c600be322",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4664876b-3e2c-4f31-be11-bb29affcd6f8",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f493b1f8-964c-442a-95f1-51dae70cb566",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5e0dd0ae-0da5-4678-a5ee-c82330253f1e",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d90b7721-7114-43f2-8f58-35c4dbdcc8bf",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "668d3352-c6b1-491a-a0f8-727fede97938",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7569678b-36ff-48ea-a3b9-7b39054fb57b",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "b5f0eaf9-2f7e-4326-9495-3c87784d5334",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "016d1692-e5d6-418e-9efb-37d644e13612",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b5aa2939-b0a3-4365-9983-4293b790b3a7",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "135ccb43-961d-49c5-afa4-1f98f59a7e48",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "439b17ca-e541-4abb-936a-4e6fa8287673",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3596bc14-f130-4db5-8bdd-cee9eafb1a54",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b293bde0-9ad6-4c1f-8536-8f8319a99fe8",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9881a1e2-d146-441a-a059-a01abeb13fd0",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "38a95941-c270-44e9-98c4-49e600045333",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3b31a8e0-fb99-4c01-a243-4d991d7902de",
    status: "In Progress",
    diligenceName: "Name 9",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "620f8639-2ccb-4f1f-bcaf-53e0400c55c7",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4c0bb1d6-9e34-46a6-a818-2a5573b5cfa6",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f6162040-5b79-4a41-89ed-e989c12d88ff",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c2e7844a-431b-4cc0-b5bc-9343ae98b65e",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f4da14ba-1592-4cc0-adc3-c3645b586d96",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1ae172c8-0b29-456f-a7d4-f035a1b156ca",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9b656071-9941-484f-9e5c-03820d2d1b02",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bfb96b20-9980-4e58-8124-e14c268b45b3",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "245da938-a411-4d37-91a8-30d00e7deb96",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "901e9f94-a98c-4fd3-88d1-89b7bcd18972",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "41a2e44c-ef35-4473-aef8-6a2fb4737e9a",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4fd7f3a3-d84d-4bef-9833-45c7ab4f5e89",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7e3a9b19-2250-415d-abde-6e42b72eea90",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "fb286f1d-9004-4500-90cd-3aafc0de0222",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "105f6291-7d3e-42b5-a0d3-052e9bcfa51b",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d2e22826-65c2-4130-a32a-d9b96b841c52",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "58eef46d-6a82-44fc-91b7-27286c8f28e4",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "eca312fb-c436-4b78-b745-24dfa9e28842",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d6770a5d-9673-4a77-84a4-4af776a02e61",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "59dc73b5-fa6b-4b31-96eb-ec08e7f60965",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5fc79e89-0a72-40c8-ba51-1a13e1c4bbc0",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8fa090b4-4f19-4de8-97b4-74bc0069bf1d",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "089ad78b-cb73-4de8-b2a1-c57858880ba3",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8f7d619e-fad5-404e-8e85-4c1af1927f4a",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2a41df16-0f8a-4f7e-b7f9-0e317439e6d2",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ff921ab4-e986-4921-b9e8-1fd9b9c24737",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fea33fad-d34e-459c-92a1-ddc9eff2511a",
    status: "In Progress",
    diligenceName: "Name 10",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "62a0641e-5143-4782-bed4-6d30a3f20373",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d86af778-49f7-48ba-9341-728c29df5fff",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a36cef08-5d77-4e2c-9e7c-535904a1e25b",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fd419dae-129d-47e9-9996-02570258cdf9",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f06169a2-35d4-4b28-bc9d-558cbdff72eb",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "86632e77-1dc1-4e75-8b8c-668bdf9dff90",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5b938fcc-f177-46c7-8fb9-4b76f517df06",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "236dfd6d-6ef7-42ce-a054-67ee4bae4a5f",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d3e72723-cd6d-451e-8fa8-7ec50b35b0bd",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "fc3c892e-9925-4591-8624-3f4580dded8d",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f381ce04-77b2-4dcf-a910-d6a6c01641bc",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "059e76b5-466c-4d9e-925c-b6fba83e78ac",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "428ec951-8d86-4b5f-a06f-755ffa1aa62c",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9e68776d-3a02-4133-9027-0bbae18380bc",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c3421c08-1b84-42b8-91fe-ee063209ec0a",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "331913e4-0c04-46e8-a43b-641804967470",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "be59d87d-5758-40bb-953a-26dbe6d5cee1",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "906a98c5-f4fd-44b0-bdf9-41f872b44f76",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "30471d41-2475-4d8a-a778-2227a750f6ce",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fa1b7ee6-fc5e-4fe0-b48a-fdf413098e88",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ec9500ff-23d7-4a3e-9d8d-03386ec0d5a1",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "63572668-d5b4-44a6-8995-83120d5121d9",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c6d5079d-4913-41d9-b924-84b6af01c04c",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f848919a-8fa7-4406-84f2-115d3b27bda4",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "29f69eaf-6e7f-4f82-a282-76e2066dc396",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c8b951c0-4c96-4555-9eb6-feb08065148f",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "da0aa0a5-aa33-4651-ab2e-ff63d37f2ac0",
    status: "In Progress",
    diligenceName: "Name 11",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ffc8fd95-6c1a-4e0d-9e79-4d1dd6ffc1fa",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "499b1018-ff45-41f3-8c76-90ccd543d4cc",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f4ad88bc-61e5-406b-aeb1-553dfa14085e",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1e1b1555-e26d-473d-8fc1-b331ad35addb",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6fe22174-03c6-4aa1-9890-03ec67dc9119",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1d40615c-f200-4ada-a180-1f139d171fba",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "95039b73-64b7-4247-871f-71715e8258ba",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3028cb59-7fbe-45a4-aa4d-ffb484cf7d00",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5f67affa-2e82-44dd-b216-bac5f4867cd9",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c93b95df-8e7e-4efa-81e8-166f8123458b",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "31ee0121-c11c-4a42-adf3-c91d30e6c8a0",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b81aef01-0985-4317-bd96-56a13381908d",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1f46c8e7-d8cd-4863-94cd-b2df3cfc1167",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "81c42e84-c31f-4577-938d-b9955189cd5a",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "87a7ec09-cf86-40cb-bf20-095a8fcfe74e",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "94a52041-bf69-416a-90e5-b71c7ee76e33",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4caa8471-e492-4383-97d4-d409bc1e480e",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "8fc94221-19a1-4efa-9c82-7cecc00ad7bd",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b082d07b-1074-4525-a4e8-05129152226c",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9d77b364-b7a5-4b4c-955e-4b2d699e3f96",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f6981659-c7f9-4d52-a253-3d5b282266af",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "40a841b2-b86c-4a07-8f8a-60a10f0d2fbe",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "398941bb-28a7-448c-bc8f-a44477f15c11",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9c92252b-01f7-4dca-a415-0ad1b0a76ccb",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f2cc5b7c-b169-4ca9-b0a6-fc9ab2c8a7ea",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2eef0635-d2b0-4f41-b442-2e2806570e9c",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a6fea36d-e74f-4c8a-84ea-934749fff4fc",
    status: "In Progress",
    diligenceName: "Name 12",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "110282a5-a9fa-4c96-bc05-13f7419f7f16",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "41cbe1d2-585c-4033-80f0-f2f3245ff8fa",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "acef94b9-5564-456d-aa1c-6a3432d8d037",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "38e51b2e-ca57-4a43-87b6-4dabed9c557d",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "35d39e7b-b7a5-4ea6-8202-1775af8d0e66",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1cc09ef3-ff74-4d5e-b98f-32f8cbd4d3bf",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d934ae34-6181-4a34-a5b1-c19b8218f532",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "11632f4a-f791-4f09-9bfa-f99101fc5a0d",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f6be42d5-c87d-42e0-8ab9-f6e68ee61d71",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5e53c5b0-d045-4f07-a86a-868e1d1329d9",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ec6bde3e-fbd9-4367-b632-ed18df0f5e6a",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2e5e9623-d181-4f26-8b41-509649eeb8ac",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ee016e4e-0fae-4132-8717-dc0c92998500",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "20224de4-0272-4d14-8861-000959d72385",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "31195731-6893-40c8-adcb-3fb911afcd26",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0278e87b-9746-4dd9-88d6-4aab3e9a9c4a",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ed1e15b1-648f-4362-8786-02a7447f85e4",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "50402766-e8fb-477a-ae2b-6c30338ec554",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "45fe1d8d-197b-4340-ab2b-d9a37c7ba447",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "20e20d69-985a-4781-8b51-0eb168ff811e",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "90816a57-736c-4298-a2a7-55874f36d0c4",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "745ad6dd-a56b-47b2-ae49-3d8ee34cd964",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b32a0f8d-fabe-4882-900e-89d601d8feda",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "65f5fe83-6081-43b7-b0ad-54a3ec6ab9a2",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1482503b-67a3-413d-9077-699036230a71",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3dcd3de1-7d1c-4663-adc9-066dc99be6f6",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "becb936d-c238-4f7c-a0ac-9f7658c20fbe",
    status: "In Progress",
    diligenceName: "Name 13",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ebffe980-3893-47a3-8088-457f181b18f0",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e15a2ce2-2fa8-4a51-bd67-e18526168376",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cb6861b8-350f-4c8a-850f-dd4ab64b60a9",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c1058823-271f-412f-a2be-46f744af380b",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "36cdc3a6-7a11-4992-9c0c-9e54886a4985",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7c63cb7b-7708-4375-b4b8-490fea2bcc93",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a1c8f99f-fcd1-4e58-b5a9-81a1dc68da75",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "499acc07-5f53-4ce4-8f66-1603fcd88558",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "150840ab-12c4-4983-9577-a3eed47876c1",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8d82cb23-ea3b-4100-bb57-4885f95ab861",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f786094d-7373-425a-91b7-c611bfe47c58",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d28be1bf-269d-49d6-a9b1-70efd898eb72",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0f616e69-6f2e-442d-87a5-5d34baaf5f09",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ab1ebd3e-cf5b-4bde-b34b-b7bf1975ba62",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "368a4b2b-3a3f-4833-8435-12e700a54921",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e3789b3f-ad9e-46d6-80fa-1b0ae904778b",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1c32d991-c5c6-419f-a3cc-60c88fe65976",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "4bfbd033-7d9a-4fde-a47e-073b5da5d22c",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1934cea0-d029-42f0-bfbd-899b218d411d",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7d65fb36-20ff-499d-8d5f-eea8cba45b0c",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4fd019dd-9245-461a-9014-d21eaabc7a37",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "53d6dc50-f154-4738-9783-dd93e139e946",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "01efa549-c387-40b5-83b1-d6269c2c1879",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "12d85375-95bb-4bec-be58-608ada0a1b31",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2cf6578-b823-4243-971c-a1f874b0cc1f",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5e6740b4-f68c-414c-be32-b6f51fdf19b3",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3780ebba-456b-4d90-8032-09c9bbda2ac6",
    status: "In Progress",
    diligenceName: "Name 14",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "45e8e6a0-d056-4d03-81e3-dd478d52bf4a",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2b878f1-93ec-41d2-a183-fb1444446fef",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "301953a2-4117-4aee-9feb-65ec28a429c2",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7e7de4f2-6513-4bf9-b30d-9bfbcdecf1a8",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6855a055-f876-41b1-b183-f4e5f6f9d66a",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b478c0fa-3d91-497b-9bab-5888ce0acac4",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ffcf8644-c631-4298-a54a-59932805291d",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ccda61b8-d455-4841-bf4a-3c1cd4487579",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6d1e8b3f-4e4d-4618-95b2-1a151d9588ba",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "88b60d86-9915-480c-bd0a-2f989562b4d3",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "036dcf5d-e305-48f2-a5f9-2a2eefa77ef4",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f653ad7a-9d08-4067-89f9-21d7a3e338ed",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f6fd9729-90e1-4c28-8548-beb8d1291b6a",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "56b67f2b-63d5-4164-a208-162298e65111",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4e4354d0-80c1-4024-bd07-d3f5ce2f56ef",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ab04083c-fc3d-414e-bce4-3a18066c440b",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "60100f1a-078c-4101-b017-cb5518939fcb",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "5bcb784d-f048-437d-9b52-9756ffc9a9ba",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "96564669-28a0-4f4e-9c43-1660f81eb08d",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "21803896-0758-4e5d-9829-3f29eb2b311a",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "32f831b3-34ae-4d45-bd7b-c5f72a5cf58a",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "77d0f2b6-2c16-44da-a129-59190b6690db",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8d34c1d8-d64d-4c0a-a51f-7aca4d1aad30",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "152c7c20-067e-4bf5-871d-5f1c2cd5e99c",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ba850f83-d5ba-40f4-9e5b-481ac1106fbf",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e4bd6510-2d0d-4ada-972f-753576b32914",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4e80e1bb-180d-4ef0-80a7-c2582ea85295",
    status: "In Progress",
    diligenceName: "Name 15",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "21203504-df82-46d6-aa70-9edbaee30672",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a1545d9a-7a83-4215-bd04-84fe666e7c6e",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3be303df-cadf-47c0-ae2f-937e4480f61d",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6b30678e-2b7f-4cce-bc76-729b8079541a",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "98913cbc-e809-46ad-8dea-b6acc61060be",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4160e9c1-55fa-415d-9e8a-530756ad5ece",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f96b0363-b950-4a0e-b0ff-2a813cdf3308",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0f442311-2711-417f-8f1d-af983b50dd3f",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2863bc5d-53e2-49b6-b377-cc1c04b3c1c9",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ac3cb6f9-8a48-49a3-953e-831cf66082a6",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "407c694b-1841-422c-a300-591ccda3a943",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c72f91bf-7a3f-4298-8001-5b9f19c238d5",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ec051ec2-bcde-4a59-ae99-7372fbebf031",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "785cc88d-9f87-427e-82c1-b39cd1f05faa",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ba068c9f-7e36-4874-9dd4-19dbae8b51a0",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4100f12b-9bb1-4c78-a406-ce7ab8b3c675",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4791de6d-95e6-4ba6-959e-4fe6c8ee6cc4",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "a288e2cf-6a89-4467-b47a-003cbab195a6",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b5970ecd-f0dc-4606-9cfb-2261cf44972a",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d4fc239f-4d39-4b34-8b82-dd45b3782bdd",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2e7ccf6c-f650-453e-964f-8958004c8d31",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ba04a4a4-21d8-4cdd-867c-c7e60b6a8d07",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ad3bcf87-54e4-4b2b-8104-f0d3a81539f6",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bf692318-b787-48dc-9ef9-df2e84d96cc6",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "de930573-5607-45e1-b996-2ed0b4f469a2",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ab66f424-b126-47c8-be06-9508fb15039c",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "53a29c43-2530-4fe5-b01a-d5fd9a6f3e09",
    status: "In Progress",
    diligenceName: "Name 16",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4c0aaaa2-7860-4898-b1e0-5272b18c5ea6",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e7503e77-2cfd-4aff-9f72-f8028180b952",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2846ddd6-7415-4ba0-ad0d-70bbeb5a4541",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d25dbd24-282c-428a-a2ef-76ff894f61e5",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "173949b3-0bf5-4428-a182-37627cf8158e",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b551ee3e-f69e-43de-a0d8-41eb3b8169c0",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ffe71122-a6cd-46fe-9675-bc99fbd52081",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b821a35b-05ed-455f-b7e5-d0c84c9d6823",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "307da6df-118f-4390-b82b-de38286267df",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b29a53bc-7695-4694-95a2-286f59b5cc55",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9c148bd6-c8a3-4a91-9c72-3b91f174aed9",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "517822c9-1327-4a5d-85f8-cf3ebcc2bc4f",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "cd0377a5-9863-4490-891e-ae51be88ba57",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b39582e8-567c-4afd-9013-6895b83b9af6",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9ce53436-feeb-4d6c-b40c-7c2cdf44957a",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "334db04e-e701-464b-8904-adad315bde26",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b993bf90-27bb-4e1c-ad68-4e10c0e352ab",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "5f3f63d8-2678-4d2a-b798-48c3cb8c10b4",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e54a75bd-0e3e-4222-85da-94ce9110ddee",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4c6fb7ad-24dd-4030-9e4c-8d04486a6ec2",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1c41ad8c-b15b-4c7b-8627-d5616fc28fa6",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "734366f5-ef71-42f3-8f7a-8c78155d5e94",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "49db9911-bab9-417d-8cb4-f9a16196a829",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "086fd940-c105-4697-a7af-bbbfe22eae09",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "30b123e9-e7c3-404f-abec-4868ba6828cd",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6b948704-736a-4e0e-9ce4-cc7464412093",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4683119c-837c-4555-bb88-8f1a63f219a8",
    status: "In Progress",
    diligenceName: "Name 17",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b6507dd4-fecf-4f02-a817-340660cec500",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6a6a5dac-c147-4040-b7f0-ff58d1c7f858",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "84b2fedf-5c95-4854-8b1d-a3ad98d60577",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a968ea17-c3ea-45d9-8395-9807eaa15bf8",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "00674684-daa8-43a2-9cae-11f03533fd3d",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "59937a04-b711-47d3-92ed-aba96b97acfd",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4a410a0b-6c60-4a11-9548-4bbfda82c188",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "349647e9-482a-4ba2-8dbd-8000ae35e848",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "730d4e5d-340b-490d-9065-dba870a790fd",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "50fa2f6c-d5c1-4bde-8023-0a69a2ed5bb4",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8d599061-145d-4865-9a3c-ba575577a0b3",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "42f21ab5-81ef-4aea-96bc-7c1e4e57a65f",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a806ccd2-0b5a-4150-b6ae-14cae9c32aaf",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "47f996c3-784b-4217-a434-968fde69d019",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f05a3606-fc30-4dcc-8398-f08304a3b891",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d2f9d092-d0fc-4f80-8201-270cab1fdd06",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "740bcfd3-01ff-4697-ae87-17cff4fbc3e3",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "261f57a7-9122-45f7-a223-4fb483efe84d",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "db388898-1c8d-4d80-944b-d9900272f244",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4cf2589a-53e8-4061-8ced-52117567969a",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0eabe186-aba6-4878-ba66-79e6fc6cc9a4",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f1a38282-f1f0-40e5-ab83-476c9dc221a0",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bff1c25f-ec38-4f3b-a9a3-69a66d04201c",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f14d23de-23c4-4ef4-90e3-e9ed8c33c13e",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cde7bd4a-c9b2-48ad-81af-8bc85d7ae743",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "470c7c53-871c-415e-8317-2270b8e06144",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a66efe03-5734-49a2-9796-c6802256c111",
    status: "In Progress",
    diligenceName: "Name 18",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d2fb4804-e3f0-44e4-9d1c-e8702c29b9ba",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2d9aa9a2-dbe9-468d-a5f4-ba40a368cc03",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1dfc3fb6-dbe8-4553-a05a-4c9947d7798e",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "742121b5-6688-4c08-8507-b7634205e635",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8e6f6f61-3929-431b-a657-40d7a4b749e9",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3db5d62e-b55d-4d71-924a-a1a44dcc86bb",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "30fdcc2a-ec9e-46a4-954e-f76e8a750dfa",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "aa8fa6e9-938b-4c87-b062-adf650aea70f",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "193b963e-a8ec-44a1-ab2d-c924b4d6165e",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "49e1bda6-13a4-45a2-8b71-a55d8975572c",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ed1a2f1e-317d-42f8-9e7b-4e4b2d8063bd",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "688f7558-5704-4a84-a560-16e7a3453049",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0abc7d35-a890-4c75-a4ee-5b20eb75c522",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "3cc75bbe-17e0-49da-917b-c6fadd7d96da",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ed250a9d-1e74-4b27-b345-99fe35d4db24",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "fab04ee8-fa6a-4ad6-a589-9561e1272d41",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2376a484-6166-4320-9610-9633bc04a3cb",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "31509de9-761e-4a14-845e-4de75c6bf62f",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1ac6c260-676f-401a-aeea-6598bf01374f",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "910425d4-2229-4f78-a274-0d081d2cb3b7",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "442eab3e-7005-41ac-a8a5-dc99a309520a",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "062f51fe-d823-4efd-b5ce-a9894430f189",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cfa8557a-34cd-4b51-8d0f-83ab79b962ed",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "10b65952-fb30-4b0a-a803-a7b8e87a2bd1",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "edaf682e-2cb7-41e0-9515-51f8f1d41651",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2a27518d-46e3-417a-b57b-ee1147c9ebf7",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "537da804-7d8f-4d1b-b7e4-e36369590938",
    status: "In Progress",
    diligenceName: "Name 19",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "40decb6c-2821-4e98-8df6-356af3401380",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "76a67bd8-c760-4489-ada3-0f7e7bd05391",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2239f018-63b0-40b5-bf24-ecd5dfb97b77",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e8492439-3017-471b-ad25-11e0d96e3ca9",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0ed50ef4-a111-4c7b-8d20-45533010d3a7",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2eba1b7b-12c4-40d2-b650-f672743826b4",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d8be98b4-2261-423b-a3cf-4b3765681ba6",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f5b041f8-340a-454a-a3ae-c4f9e09e8f54",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c71f6dbf-486e-440c-84e6-19336aacea09",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e1cdc90c-fefe-4001-8a0f-f6e549f785e3",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "801abc61-d478-4c5f-b161-4da8117e01f0",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ea3b8833-ec0d-4c59-8a3a-fc0d58c5c172",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6994dc72-d91e-4363-a265-88d3824a74a1",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e6ce899d-271d-42a9-8575-e6a88e6325e7",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "95092bc0-05f2-444a-a733-e9a404658561",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7856a745-f0ea-43eb-958b-6e1cd39958ea",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a179112a-f442-4c18-a150-6064c800d9ee",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "5070cef3-c261-4b24-a1ea-3d01101310a8",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "74e47957-87f2-4201-b6c6-6ba917755cd8",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "15a8c1fd-f16f-43cd-9a74-d3e4b30b7dfe",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "30191bf8-ee26-4a94-ae0b-2d4287da92ab",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "272cdaad-bd21-475f-a476-11689302ca09",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "95e91e5c-5ff3-4084-b26c-738f3e66cb73",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "05b81874-d420-4e72-b00e-5a89c83e5645",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3e994654-97da-4810-b0cc-f5f3266756ff",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "099aaa95-558b-4ea0-9040-9eed260a7f28",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "96f08cf6-8625-482f-b34c-1e475610c123",
    status: "In Progress",
    diligenceName: "Name 20",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a5de33aa-83ae-44ab-9ef8-1e453d8e1bbc",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e972e376-2a17-4285-8a5a-b3c54f46a34e",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "834b8169-83aa-4a82-b8d8-261521f40711",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "79ad1829-5d4b-45b9-b162-cb9a744ee88b",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "db99ec38-d6f4-4e46-b916-e803d3588217",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d1b0a3a7-426b-4f36-b835-de7222fafbde",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a91643d5-ea52-47d9-a4c9-cd728b353c5d",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "047ddf15-e86e-406f-9b2f-78f9dfbde587",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "59433d11-57fb-4dd1-afac-e30160b8b066",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1832c26d-54bd-428d-b20c-e642a1e5c6b1",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "77c4d7e8-808d-4252-a3a1-16809709090a",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d8aee451-4d54-4760-bcd2-b9c1f31c977e",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d9574e7a-891b-40b3-8076-86481218dbac",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0b46aa5d-70f0-4cf1-b2ef-9dfaf5d72c14",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c882a025-d664-46ba-9c21-9467c2ca55a0",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a1692929-57b8-48a1-bc60-e4612caa662e",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4ada4aa5-d68a-4950-869b-27a857d79b9c",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "d526454d-9959-4c7a-9fa6-a2a1d2449242",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6f7c367b-5589-4d89-992f-39cc8eb6f215",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5b77d0d6-1d1b-4528-85e4-0086ceae0568",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c7112ef5-a74f-46b0-8c9b-c27c341b1e46",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "679d538e-755f-4669-ab9c-d9e39189b7c2",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "541b3af9-a442-4428-95e5-cdcefb593db9",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "94419d2b-1cad-4c7f-bb35-d5f1fe83ffff",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "091d7521-bf37-4ded-9d24-dffaf2ce3587",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6ac4d824-71d4-4901-bf3c-8dbb32feca28",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6a3527ba-4b61-4e0e-a495-d690a868f3c0",
    status: "In Progress",
    diligenceName: "Name 21",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d92808fc-45b3-4f67-b756-2aa814a04ff5",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6dc55052-e66b-4d33-bed7-d64932d3fe07",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "584ffef0-60a4-475a-8119-48fc300a70de",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fa346077-eca3-4fde-8a03-ce3e949504bf",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b17c0a21-f98e-415d-8784-dc04cb85c9d9",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b5b5d4bd-ea03-43d0-8108-cd0d5512ef82",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2fdf12f7-2d8b-4b1f-99b0-57a3fe8bd443",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5c25a9cb-2225-44ae-91b3-58f809548257",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b090eb9d-0f96-478c-a781-7e87f325a3ac",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "84dfec0c-991b-4449-832c-b5bc3b306259",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "910b4c26-45d0-4a5d-b728-88f01457b949",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a574ef66-dd88-4132-b460-d7a832ebfe35",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "26e28263-d036-455e-bb25-93e550f72cd5",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "35b0b227-8308-49c4-9aa6-6f7f3594434e",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e588e9f6-318a-4623-af7a-61473aa825c3",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d71fc01e-a77c-4dac-a4bf-c6716a44e51c",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f26fbed0-a296-4fb6-b5ff-03259edd2e78",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "5cfb2f70-d2de-4f3f-87cb-370a6b27736e",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c4c6d38c-4383-4cc8-a024-b32bd6c7ed41",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "864d79c3-e00d-4a70-983a-02cedad52dd3",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "af1e2f64-6d12-46e0-b426-0f5fa87fc06c",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3cba5c7e-0982-4fdf-af89-4d56883b5be5",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5cfa51ec-bd35-4294-8fe0-1844cce03143",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9de93ed2-fbeb-41fa-886d-ef6e4f29b392",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5a9baf06-0151-48e1-94cd-f613c8a2bd07",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b243435e-a59a-4b60-ab39-c80762d7d612",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "eb9c567a-d631-40a9-abbe-5468a0a9bb5a",
    status: "In Progress",
    diligenceName: "Name 22",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6181c061-938e-41a3-8b3e-da58117083f7",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d88c3bee-f090-4437-963d-fced61f4c509",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a92ac492-bd9d-4aeb-bb8e-9f072495e773",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1e9768bb-8d10-4fc2-a93d-2f1a1bc14a79",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "73f55005-4b90-4a33-9390-667f2d52c560",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5ca7718b-f86b-452a-80a5-35cd3963b35d",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "be645b97-615a-4b5a-a083-0dd93c3d5015",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0cbff813-8dfb-4a6d-a0bd-c031947368ad",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2f129b5-2a4a-4c3b-a460-4e7ccb87a76a",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "25509ce6-3ff6-4155-b54b-43fae979e43a",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1d4b5b8b-f21a-4ce8-84ec-5b9de0a35e01",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "de69465f-cd3b-4fee-96e1-36c42ffdf659",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b548a472-cc95-49b3-9810-ddca1a193875",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "31f94e54-10d9-4de5-a101-4b8decd5ff79",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d4999e6d-add6-410c-bce9-0f65a51886bb",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d1f31751-e684-4e9f-9944-d0656736437f",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "eec43473-e8f5-444a-96db-4af723adb329",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "2dab4e39-6ecd-4853-b4eb-33f73e993036",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "afa74ef0-3783-43b2-8e66-4d4d885dfc6f",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4bd8f8c7-846a-45f4-9e03-7fbac32eb72b",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5aae4772-9e71-4be0-b5f2-82be42df9a91",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ea2e2c1c-e83c-491a-8965-b278d654f4f7",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "24cfdbec-23c2-45db-8a95-a4a0b3bdc8a4",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "497ddc9c-4882-4c72-a7fa-6ead3e88567c",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0f253fc9-8554-4b1f-aac2-5dddd9a05f1c",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c450102a-37ec-4de9-b29c-f294b5ddf67d",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "241a114d-ff27-43ff-9a59-a895ca099f5f",
    status: "In Progress",
    diligenceName: "Name 23",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "301871f0-30a6-41fe-85da-198d0d59e1b9",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7ec20eed-1c6e-4eca-b483-9d02aa54190f",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f69c89c1-d854-47aa-ada7-febdba4c30cd",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "de73acaa-6b93-4563-a7ab-7752e508aa6e",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a0466f81-ab1e-4eb6-8bc6-8adf5a0e0ec5",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "06c36ccc-5ec3-4580-89f5-ddc72822a9df",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c6fa44b7-f7e0-4fc7-bb1f-908d55fe2298",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "64083b8e-5d56-4b14-87b5-592bdd336c0c",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1fd10a91-ed8d-44db-9b02-e8c03b18d615",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "83982ab6-3d60-4e78-9b87-7c05e2f35020",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1c7be154-e2d1-42f5-9ffe-e6a78170f39d",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "af4cdfe1-0c57-4fbf-b7e5-fde0ff82a033",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6ea4e313-678a-4af5-b215-cdc8c799e651",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2bf2dd30-63e0-4655-b8de-a93e6ba63b78",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1f536433-e2b2-4e6c-aad7-e51bd90491d4",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9018c9c9-8a70-48b1-8e77-651975d176ec",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "03733a33-9f40-43f6-a240-b7b7b770b059",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "37555587-8f90-48e8-81fe-49bfbfe9b1ad",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "27008b89-d7dc-47b7-be94-1aa98e593a8b",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3d03cd05-6941-4685-89a7-17cc6311a3f4",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "02466e5f-78e1-4e6b-a1bd-5259806f3952",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f93e56f9-d473-49ce-80bb-0ba56a030cc4",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cb985bfb-2c0f-46d8-ade0-9412f552540f",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5104c2ab-6097-4371-a340-32459f656389",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4094f475-1c99-4612-b154-61482d766dc6",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1ce62b33-1085-4e66-9eae-1f108058350c",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4d9198c9-9b9c-456b-8228-e3dda3e86dba",
    status: "In Progress",
    diligenceName: "Name 24",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2a79b725-73da-457f-b0e5-0e80bb221f4d",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2069979-0378-403d-823a-c7a5c9a1e4a7",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5e4aeee8-4eef-4e4f-9618-76abbea9adf8",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f4d96a60-53f1-4158-a5b3-f0ee8234ce76",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c078d424-363f-4c03-8b13-7e82ecd511bb",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5fcaa777-7f0e-4ac6-90ad-560c9f70a3cb",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "de16e2ed-3487-4157-99db-f15bd8bc2ec9",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "baabb797-3ca6-47d5-a280-ae8a65dc0970",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "77c1c31b-04ae-4d3e-b908-0fdb8b3fc7f1",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "3aabb029-ff0f-45f2-b74d-4d19d7f7f36f",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "abb55804-6082-4711-b1c4-d1a07db30717",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1ae782d3-acda-4f5c-b67c-f186823b4d06",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d25484ec-8c4e-4964-a99a-6c0b2e76db11",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "38363b3b-e6b4-4147-b361-c98032e2527d",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bfb15112-c1c6-4b0f-a562-302646222c46",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8e86e1b3-36e2-431c-a38e-e5daf8b1000b",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "812abe4e-49c7-4942-ad36-c67d5dac5141",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "c6478a90-d909-4bb4-a575-9b34a0a8ef1a",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d370ffe5-fe3c-4367-b74b-d2a4731a2ac4",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ee4a1fdb-75d2-41b9-b95c-0639efa1311c",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4441309f-893d-4a94-820b-e8d327d2e8f3",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9df12802-8238-4dca-9ede-a39e6282e55b",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a8a67ed1-3f46-415b-a1df-43aac898e717",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "757ed7ea-1588-4cc9-9769-de1cf2435c33",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "887006a0-262a-486a-9fb6-1ebf3e95ee6d",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0b6e85c7-66be-467d-aab5-5bf580c2354f",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e6e63965-06cf-498f-aa8c-643e8c152c97",
    status: "In Progress",
    diligenceName: "Name 25",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6d2390bc-0dc0-4375-a528-1dbf084cc55a",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4172736d-8c39-48ce-9d47-987b0e502ed9",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "75d21ccd-7b75-454f-a4c5-6151f219499a",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f395a387-a8a2-4d3c-8bb9-57eee8c5e37c",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "819d77e7-3ec4-42e7-9414-5a39886a9d22",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "79b58da0-c265-4af7-8966-a15a234a52d8",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fa33171f-a560-4877-b5ea-4a3cb1f3dbf2",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "da259d89-07fb-4376-8942-31ed8e73b8a6",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1e18f8d5-1fb4-498d-8c05-dc56d894d935",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "910f1670-8e54-4eb9-bef4-2b37943bf070",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0d1fde09-693f-41d0-a0c8-fb577da17b40",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "cf9df83c-d98c-4e2f-8082-7bb401b0e70d",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "624a3402-ecd9-4081-a358-400635afcc40",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d8d08593-91cd-4ac4-9b31-f8eab179da4f",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "591d2224-b639-422b-8bb6-83355aefa119",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "3f109c36-43b0-4553-ab56-6796c5b57614",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1b12f123-3065-41b0-9f69-2572f1dd21c5",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "e77e4561-5fcd-44ab-92e7-145524f34ab7",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1bd43ee2-8d24-4351-a648-9f0d062a35d6",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "430c5b5f-a5d8-4cc1-b480-cb5a82dca453",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bf903a8f-63e5-4a6f-97ba-e0597829b081",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6bbe06b2-be79-4f54-bf2d-b79ed2d79767",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8bd61fbd-b52c-4ab8-a51d-faef6b8e9148",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a31328f6-b546-48e6-bde1-62e2d1b023c7",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a2058509-438f-4ea2-9148-1541d683e134",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f7abe849-c4ee-4df3-8366-f2bac70e3779",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7d4708a2-f3a5-4648-8760-507bd7385463",
    status: "In Progress",
    diligenceName: "Name 26",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c5f61ff4-a7bd-446b-bd59-b6ae31d16dea",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bc6f6294-bace-4d07-b540-e59f92bd4fab",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f72b18e9-b67d-4026-920e-9142f50096c0",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b888208a-b19c-4e36-9e76-6abf1402d600",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "18dec41e-5017-4565-b3f4-0d7edff5eec6",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "217a6dd8-13c3-4c45-b97a-c296179661ae",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9e900ed4-74c0-4781-b023-56045e99ba75",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "22593b16-e712-4137-babd-18bf4b1a4e9d",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "eb44f60d-b234-4bd9-b657-c40800fb8718",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a88e8865-81ee-4c56-ad72-ee6580648279",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "97ee6592-656b-49d3-9161-04efa4645ca7",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "850c9c05-e7fe-461e-ba09-d073b1648d51",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7940dc84-8879-46ca-8bec-97df6d4619bb",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5bda7844-6bcb-496b-9be3-f978cf72de55",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b271862d-4e0c-4d77-8099-7a5cb8d291f3",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8099b68f-3f26-4a58-b44e-50e2948cfb71",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e0ece579-ee7c-4ce7-9da0-b72a0acf6472",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "1499c752-e989-406a-a074-3a1cc28d18a2",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0fc4291e-8c57-4ce2-ba1b-10a9f9d50129",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0a1680e0-1688-4dd9-8f03-e60e769fb61a",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d7bcd7d6-c6fd-40a1-a0a1-4642de3c30d8",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "28c91a8b-a783-48e3-872d-107a1556a62f",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0b0b9bc3-16b2-4ff5-9bbc-7c6ff83c0ff9",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0d7c5ed0-3045-409b-b60c-ba17f7aa056f",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b1051b2a-437d-4eb5-8ba2-5b38d7fc820e",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "12937808-6949-411d-a9f0-7f4828ddb65e",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6f7ab3a8-077a-4f3b-bc02-cac2c77540a1",
    status: "In Progress",
    diligenceName: "Name 27",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4d71deed-a9e8-4b1a-b3b6-dd77dc046a9a",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c4ab25cf-a20b-4f42-b9e0-82430cb8ee0f",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f6e4cc8f-8187-48ac-95b4-a3f484fced4a",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1e9e4233-a70e-4ad3-866e-c78dade1301e",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "40dd8e6d-9ebd-4d8f-8b20-9e92d7a12e88",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2a458c91-8839-40ff-a0bb-5dd8c5dd01bd",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "98a9278a-4f1c-49bb-8b99-52ad5d2156e5",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b32dec3e-67d1-41f2-9344-93caa8c9f10c",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2560ff92-a5bd-42ff-9a0e-9b83e636da38",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "3db57794-a6bd-4b6c-bcc6-96d9b475caca",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "aa9f3fc3-314f-445d-bd9e-d72289c1f07f",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "350e12c3-77f3-4dfa-8e4f-84e9f334a0db",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9f38d17a-7871-44ec-a76c-ebd42a2daa06",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2d2e25ee-9290-44dc-84d7-09f0a67cda20",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bc4f1c91-1628-44ff-a016-27c2de013b66",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e2743707-ce3d-4928-b5e5-598da5bdc33d",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0a5ae89f-3f30-4a57-91d4-57655e0ebc00",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "851ff8a8-da27-473c-8e0c-0053bb974da1",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7062e6af-1bae-408d-a1d1-2b25fea4c586",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8acc31be-7930-4987-aa2b-5d18ffe8ce1b",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f1dda3f2-6a6a-4e04-8cbb-9356c239e2ce",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "df40d32b-27c5-4304-8fe3-fb921ec04a0a",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "92b157e9-f5a8-4cf6-9120-b76ccc6ee640",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a6a793a1-b32c-4774-a5ab-adf4a29ed773",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "06493c47-523e-4923-9d0b-3cdc9a2e8f24",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1bdd2861-a56b-43a1-8380-5c92790c4298",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "25132220-26c2-4639-a473-025ffdc5f893",
    status: "In Progress",
    diligenceName: "Name 28",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b76e6fd2-1d84-4929-ae0b-3e9a987ae97c",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4d98ceb0-b54b-4a95-90e2-ced8e9ea3d7e",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2dc9321-b0c1-4518-95c0-58ed58ed40ee",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "582e4d3b-b5f5-4f34-841c-b11d93da5a48",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e03da751-8285-4444-816a-5f93518ffc11",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "80dcb27e-9a53-4740-9d53-121ec2ae97d3",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "693e17f9-23d9-4d08-a328-0a5898dbf27e",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2cbe14e-b915-4f34-9d1b-e255ce77b0c6",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "504cdb98-de6a-4b83-b758-a461878ca3e4",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a6db1021-b5f5-4bdc-8a60-9b9150deb6d9",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6e009e87-0884-4570-bf2e-e2525640a2f5",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4d5bcfff-eba6-4504-b17f-ab74a0efc1f9",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9933b4c6-5ac8-40a5-8043-d8c936d54297",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "26b4f4b9-0617-41ee-980c-0319ca534c0b",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "62993bb2-c9ab-4c44-959c-268971bb5743",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f9d32d36-f7f0-43d3-bc78-b12802bbbfa1",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6304fa46-b8a1-4f97-b31c-b506c7d59e0f",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "adccddae-90d5-49f1-bbdd-af78868edc06",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f857d588-f1bd-4d9b-9ee5-5b652c9d5eb1",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8d4c4163-00e4-413f-833e-0de734e4aeaf",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7e8ff959-5e60-4c9e-80e5-32b99fed89d4",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3602adc6-3ebf-4580-bc3a-ac283da2b6e2",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e653b526-d174-45f2-8aca-0b73405598c8",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3141455f-5559-4a85-a427-16950fcc498c",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "503d57e6-42e3-43f6-b98f-9f299b9ed070",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e648d58e-d9a1-467c-82fc-5369241b182c",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0a668a89-9ec7-401f-b91f-931fe92f1942",
    status: "In Progress",
    diligenceName: "Name 29",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "661e02f2-a355-4d5d-bbdd-52e8202f4f87",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b147336b-2854-467a-a1bc-ec50ad711520",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "467b7f9b-87ed-45aa-9648-d7b3c434d999",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bad6b9d0-3969-4cca-b32f-44b8e6568f2a",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c2cb24ae-1816-429e-8b64-72cdca53c4c6",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ed19d071-b589-44a5-9efb-9ad92b68c2ec",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3c7dcd75-5c4b-470f-8f78-087ae005c593",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "52e779f8-1878-4daa-b05d-b71cfe9399d2",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "98bde337-8ded-4031-9660-a691f6b265ae",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d5ed221e-183b-4ba2-bb29-ec89d2b93824",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ec97fd5b-430f-44c7-9836-3356ebe5e920",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a5f98898-97ba-4de9-8319-fc7f1d03b420",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2bd160dc-d79d-41e7-9cc4-a7a4d483bd94",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e83493c5-52b9-496b-8349-c9724dfa85c2",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "013f0d4b-f233-48d9-94cd-2a1431d5e781",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "aa787e71-1bb9-42a2-9d68-b249686c9b67",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c4d2b25c-7555-48f9-9052-a9f35ced236c",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "4fbff4ad-8d99-42e5-86b0-1e74d6b8ccc3",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5cf2f21b-40da-412c-a663-595f53963b1b",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ea520f83-e574-44ec-a0f0-668a6197e5ef",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "405c273f-d08e-4bf8-b64b-006c367e0a1b",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b20ff364-65e0-459c-bdd8-7b32d028ac78",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a30ef2f9-7491-4e68-a36c-2e80c7c54763",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "030e8b4d-f899-4fdb-9f44-473a7a11defe",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ca82b71f-f5f0-4ad9-a5c9-8beab1a5340f",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cb15e310-9a5e-4ed7-bfa6-39cdf4d9eb77",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6de37839-24cd-497f-bd2b-94f732b53cb3",
    status: "In Progress",
    diligenceName: "Name 30",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e5deb04f-e2d4-4032-8c37-a69ba3a5d2e7",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ac19ce56-a0da-4910-9e1e-052e35ae3b12",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c7bf571f-65c8-4b0d-9397-bd14d1c9b565",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5cafc095-84b2-4c76-a952-000c1eb51462",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9499622b-3ce9-4b19-97fb-a76d9158ecd2",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0599b1a5-211e-4825-94cc-05b039b06b64",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d32423d1-b307-4cb6-b5a4-1f1749796d74",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5bc90c43-add3-4a16-92af-271da160d80e",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "399fe7aa-ecc7-4a0d-9dea-4eab2ac834aa",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "abc10741-9154-4785-bd59-0ef2eeadd287",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5fba9ece-f3ac-411f-aab2-2e3768b6d5e5",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ca14abb9-1adc-43e6-97e2-fd55e1da9cc3",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f7f3bf1a-86ed-4afb-ba05-5076c08807c3",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6ccb201c-848d-409a-a829-fca1f8225fed",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "192926bf-f44f-498f-a5cf-3af372f53571",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "31060e7f-d0b8-4b7a-b6bb-ad155af30ab3",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d4977f6c-ac2d-40c2-b0df-d5371f8c794e",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "e9d1e193-7ec8-4fa2-8e6d-8dce380772bd",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0365335a-e10a-4b5b-82eb-a03227637e8b",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2fc04ee3-1ed9-419a-b1b6-7fe0d98bbc9e",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "44edf456-9c72-4cde-a862-fc6a94107fd1",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "92db0dc1-76ac-4f28-86a1-4f0592bcfee7",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7dcc0c3f-78fe-45b3-8153-3997f5f0b0a9",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4104f8a7-09a2-4e9e-9f13-8f86f282b749",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6a574439-89dd-4140-ab4c-6d974e8cde0d",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ffc64904-6b8a-4362-b95b-27c907bfb469",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "51e386cb-ec8b-475b-817d-fa58b1687758",
    status: "In Progress",
    diligenceName: "Name 31",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "33483703-7f76-41ec-9810-b3f3467e8e08",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b5f63ace-b865-41e3-b3ed-1de5dfd39693",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d454da7a-3fd4-467a-9a54-4f4eb064ab1c",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e125f093-c74a-4b25-9efe-2f1fdfd66b06",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7e8aaed5-abbb-4e2a-a889-ab846934321a",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "31a30d9b-6907-4cf0-86c1-4086d55302ea",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d1e717df-6769-4f17-b452-5434df03ea6c",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "65e172b7-fd91-4082-b318-c4ea03f16945",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9c5d947a-3ffc-4fea-bf48-75e68b40b357",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "30921f9e-e8e2-42bf-baad-906f6d87dbe6",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e5f0ef1f-c214-4166-9457-ea5a440409bb",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "54015b60-cd97-403a-9486-0eafb0cdd17c",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a7277ef2-0d69-4baf-b056-7922c37c70f0",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "3b9dfb63-c40d-42b8-a2ec-181e5757936e",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f228aa99-56fe-43b4-8534-3706d07599ff",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d6171e55-c39c-49be-9534-9660681a2911",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4147a275-e338-4b9d-abf0-96ab88d976ab",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "11a83245-533d-403c-b95a-096741fca37b",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d0daae06-bb41-460c-a752-d1310df633d4",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6f91d36d-0587-44e9-9b7c-b7c93af6571e",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "921274b7-ebb0-4476-a685-266c10a03ede",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3448ded1-11c5-413c-8c87-f017ee871c28",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d6e2aed8-29ad-46ed-8b9b-ddde45b7d7f0",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "556f1af0-5dba-4428-aba8-ce20d5e82115",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "555207ec-73f5-48f3-96ff-d0c467635b3e",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2d82862b-d8fe-403d-8974-184a654421f1",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2eef7ec7-5209-4d53-bb00-37ac5f8bfc47",
    status: "In Progress",
    diligenceName: "Name 32",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a669fd8c-bde6-44c9-9c92-31ee04f989ca",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f0cdf3cc-60a7-44fe-a2d3-b2f1be5b5a26",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "de4c4eb6-50b3-477d-aff6-fc270d971247",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f4470dcc-e0a9-4027-9eff-d3a1f6b81266",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d7623929-fb0e-4929-b7eb-0375ceef1658",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bab51f22-8e71-4e9f-a8f9-b3ab51532363",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e7067bf6-59b3-4877-b71d-27638516a32e",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c0f59ef8-304b-4873-af6c-ce39fd4b2b0f",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6de9bfd4-ea33-41dd-8a5c-a83decf06f38",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "dad153c3-cf90-4611-b63f-93504e33901a",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "99b9ad50-8605-4a07-ba02-d3f85e47af0c",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "58c60f2b-8fdf-4d36-a8d1-2390abdaae29",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "29b4bdc3-bb99-4d60-9cb9-355679b970f8",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ad5c5dde-31bf-492b-8a3a-3e25faf7fa97",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c53e8f05-52eb-4948-ae75-37c050a515d7",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "32560765-ed0f-499e-a6df-48e7d9e0c7e9",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "cf864aee-148b-4690-99cc-8e30012c119d",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "1d331261-031b-43bc-ac6d-2c390f3fdf69",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fff91caa-7d4c-4df6-a273-345454c75c09",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "40f6c4bc-2bd5-4a39-ae2a-a13047ee03e5",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fc10d60b-276f-4ec9-b3ce-52a23be38c97",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1540cd2d-9b25-4a8e-bc41-0a84a4af1981",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b9384819-1621-422c-b230-f8e91694da01",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bd6a5c73-b53b-4e78-b3e2-7c093520953a",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b40d5d4d-b47f-4d28-af40-0ca432d4b190",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0a7b9abd-9fff-4bc0-af96-024a3f5774d7",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f51935ee-0526-4840-acfc-93f1d17e507e",
    status: "In Progress",
    diligenceName: "Name 33",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "50eeb057-a891-48a4-ac5a-65da97316dfd",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fdee3c14-4d7b-4bf1-a005-6431da28733a",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "30bd8089-e418-45e2-abf4-c57ababecad8",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1775733c-1177-41bf-ab2a-e99a9a98d5d5",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "23f08475-b64e-400a-b6bb-3eeef25e23e8",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ca1ff32d-a8ab-492e-83bc-d312d25d7791",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b768608d-3aa1-48c4-a593-91fc23104a35",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0251942e-8f4e-4e7e-b94d-be4e0d66b7c5",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "add2b338-e9bf-429a-8f29-2798be9b438f",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "86dfa3bd-0624-4962-9c63-7e63da7aca66",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5b67190f-5eee-4571-b8ff-7527dacaab7b",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bb6e1fef-bbcc-4e26-b9c5-33295b887f38",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4510a0c8-d43a-43d4-beb7-0bafa7f016ee",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ff286999-61e6-45db-be41-2e480b7daf05",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bc585731-5d4d-458c-b83e-1d6ee1df0670",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e73719e7-e6eb-4579-8bce-b4770c39df90",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4afb3fa8-2237-4bd8-9176-5309cd687e1c",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "24344bd7-b64c-4b5e-909e-c8007dec4882",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "dd23aac9-9d26-4cc6-87e9-0c73a30fa0fc",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bfd666a7-2597-4257-ac76-18168944c9ea",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0f27bf3a-3766-4a6f-9039-3c43cc8dd46d",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6690fcbf-d437-46f3-a10e-b4fdbb8b6ef8",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f47b5f4d-19c4-44cc-a40b-645f8b0ee41a",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cc827616-0f5a-4437-bfe1-d5c063963132",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b6c179d6-c002-4edf-85e2-5d096479ad53",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "087103f6-089a-4719-bba0-d87a4f0c7079",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2b1c319c-53d0-486a-889d-4aae096317e3",
    status: "In Progress",
    diligenceName: "Name 34",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ed42a21c-e51b-4a78-a1e4-9eba7f46a878",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "59238b54-070c-4e11-963a-3650581f346c",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "233e0e92-6233-4de1-943d-d990dabef7ad",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "269c4731-efc3-4230-8cc3-174fc8788c66",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f5abb2ad-5cb7-4fc7-aec0-7657830eb3b3",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0bfb4fae-f3f4-420c-b970-16713dc7171b",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bcba1993-9b0a-4e22-a33a-6e64ad275bad",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "63a8cc24-dad2-4a4d-b35c-278d660fa531",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5fe5e70c-808b-40d1-a59d-9507dd49b91c",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "43431383-ddf3-4a2e-9f0f-84bef5028071",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "44a95454-b62f-4b4f-aab0-cb2ba02af38b",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "dc6d2520-210d-4b23-908a-c511e3265f2d",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b56832ba-1843-476d-880e-cde871443a10",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9e51e02c-fb8f-459f-a2f6-3583010b4719",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1bcaab7e-a02a-4ab7-9b8b-f104f923453d",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "580c25c0-8867-4d10-ada6-9c12dcf54fa2",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "74f811b4-1b98-48eb-af4a-94e6a19b7d7c",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "214c05d0-66fa-470e-b4e9-82d096dcd441",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f03cd79b-16db-4323-a622-a2d538b9df15",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "adcfe3bb-11ec-46a6-b379-aebec2bdd8d3",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "674ee878-43ad-498c-90f3-acea17439149",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "89c0d66d-df6d-4b1b-83d4-edf45f617d98",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "da88ace5-2340-43d1-b40e-d89293d779a2",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "411d909c-291f-4de6-a359-8979699dbb38",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "07214ab9-6e51-419b-92ac-2e5f60159a68",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d65dbc6b-f6be-4997-9552-3c9251f2d4da",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8e2f26de-a347-4fd7-92d2-bfe968a42de0",
    status: "In Progress",
    diligenceName: "Name 35",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "90ce0359-a1db-4c4a-a0ba-ed7d543d1a55",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0c49654b-8bae-4a8e-a3c7-fc4fe0b290c3",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "714b3bc7-4b2d-415a-9129-84810cdff907",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "30143674-1b19-4557-878a-01f6a85014fa",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "12c0c9f2-569c-4424-a355-87a6735a5cef",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2189489b-24ad-4bd0-ac62-a80876fb86bb",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7c9058aa-8c4d-4c20-8e1c-99e582624c4d",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "255f950b-a93d-4638-b73a-eb1677682952",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "17e65e87-0615-4c3e-88dd-62a014944c9d",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "683a141a-e55c-4f66-af5f-e725155be3a1",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4bbe4e5f-5a18-491a-8962-da7b1baf0e9f",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b36d0087-0a0e-467f-af31-2dba145bf02b",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "454e7015-9682-4902-a134-e8715171e668",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "93cf5241-2107-42f3-a54e-e0d7cc946351",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1a9e87e0-8cc5-4990-83ba-f38641e770c8",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "25a6222b-5525-4128-9ec1-72821434fbab",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c8ca9c38-70d9-4bf4-b9a3-d42944cd9577",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "930596d4-1c75-4bac-afa7-5f1ac6909689",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1bcbae60-3524-4d51-ac40-7ff43c18d6c4",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cfc328c9-5e81-4d05-a1c8-02eaa7888116",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "694569ab-eed1-4474-bd52-077b058d9f1a",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5ded3320-c811-4413-90c9-fc279d62b1ed",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "236caeb4-4363-476b-8419-2e7ffe2faacd",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9d9c6597-a979-4116-b68e-4f00ac6f33b9",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1d6acc86-cd56-4ef3-9a35-64c16c3ca7e4",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6e3a5251-9f70-4068-bad1-a3adbbbe4ccf",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5dd2f4e2-b804-4b42-84e8-b359296fc69b",
    status: "In Progress",
    diligenceName: "Name 36",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "37697b27-7c2a-4a86-967f-556deca89cb2",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8386554c-d0fe-4c5d-b3f0-99ab531e457e",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8ad57ae1-ecf2-4539-a460-56b95a6bb250",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c139c01f-b6ef-4742-98fa-f7426a8932e5",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "74f9bec3-5630-4748-bbcb-741fe71a74bb",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1b26686b-12cc-4237-9224-0965b18939ad",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "edfb27f0-2d26-4cad-812b-6de7f11bebc6",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "13f359eb-7082-4a1f-9dc5-445a99c7c314",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4733e8c7-28ba-4a60-8328-5db6b3f00603",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6650b29a-70c9-493c-aa2e-1e1ed1c02442",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e987818c-739c-4a2b-a9d6-85e8f87c121e",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "3d3f0ff3-87f4-49d5-9aa9-5afb255fb628",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b529ff10-3d81-496f-add9-a4d5e7dde16e",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8d11f7c7-e364-4938-aa8f-3f647d4a7265",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7f2c0063-0643-4c65-a8a5-c240cd014564",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4329fc63-1bca-46f7-a4d6-b73624c05c97",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e9e2eb4e-a50b-4973-94c8-44fc500aabdf",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "4146bff6-5edc-4e82-8924-007928984e7d",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7ab2aaca-30e2-485b-898e-896be0678f2e",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4eb4ae50-dc43-4f97-bb39-e89a9abda46a",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3e29002c-8f6f-4fa4-b949-625c8b580977",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b21cfe97-c0fd-4cb0-b7b6-eb3b3a3beb01",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4359a9fb-3d32-4430-8f9d-46448fc1617a",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ed43a4b6-577d-4464-890a-ceeeeb6d8d94",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "831185e6-f302-43e8-9a54-cc072373930f",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "985cf084-cde4-4411-9027-2fe41e46837e",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3bf2a3c8-4963-4edb-83bc-61e42daf7099",
    status: "In Progress",
    diligenceName: "Name 37",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "94cb1ca0-155e-465b-848b-83a2c4e54b95",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "008e67a2-7301-4150-a395-a0b93a7f4aeb",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "98a389b9-a8ae-44ec-8d09-e4a9b5811f40",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2450a92c-f58a-422b-84ca-f59622002719",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "555bbf18-2f28-40ae-9030-f9644419fe1b",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d7209bb3-ea18-4d85-8abf-f940331e8a4d",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4c5031a8-f322-45b1-824e-017b275ce2bf",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f3a96bc4-4d1b-4b50-9477-21c1ec47052b",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "08548deb-0110-4835-a39a-e33a7c5f14b1",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "28a8bd90-72fa-4099-a33e-e240cf659163",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "93ca84e3-a5c3-43c8-8989-d57939e2a0a6",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a15df1f3-8c5d-48c3-b048-8c85f658ff63",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "85861a3e-f737-47a3-bf76-ce55ae209746",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "61e9eae2-1d10-4ead-aa5d-460e5abc5d88",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6f86919c-55d8-4a5c-9235-7336155f5276",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c0f82210-e317-4231-9a07-11322720bdaa",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6d4ffbcc-b0e9-4559-8e61-452bd4b869ea",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "983e3f2d-dfc9-4586-95b8-ae93784b39c7",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9c6123ef-16ad-49e4-93fc-c73ed02aec83",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f596dc74-883f-4f96-8c95-d6acd2099193",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "92fe6a7f-c3af-45ce-a9fb-a1dddfc4f424",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "01a09589-02a6-40bf-b5e7-f727750ef8dc",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1f4dad29-5d99-4f5a-97e5-99ce2e48f64f",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6a564d81-39e5-4f2e-92ab-8b8e2d6e6b58",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "eeccc703-789b-4bdb-800e-beb5a3074e68",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b08ed8e1-2209-4390-9d20-880c55e7ce2a",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "28ddb920-62b0-46ce-be2e-9b146c589384",
    status: "In Progress",
    diligenceName: "Name 38",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "04640208-7b37-47da-ba2c-a582534baaef",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f9ce065e-0b0f-46d9-9b3d-5b570435749e",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cfddb10f-0849-40eb-be56-4b91a7c66e2a",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4afad266-704f-4da4-9c48-52ba70eec84a",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2f19d874-52c7-4f23-8b46-623bc2d27be5",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4fcf46a4-9dbc-4274-8b4d-c5c6747337b6",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3a69cf2a-1948-4657-b59b-4782a5badc0b",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8f11c55e-b361-4cad-894d-7d6ae4c63260",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "12e9659d-339f-4e9c-ac61-e99f3617e9dc",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c18efc7f-4491-463f-a318-ede28077af54",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b0454d9d-e232-419c-9907-8164085790bc",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "34a4f3f3-2d0d-4784-be7e-42c8d6be18ec",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "3cc28e2d-5a6b-488b-9f6e-b571b9048ad5",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2a27e63d-ccdd-4fd9-a24e-c0419e7a9a87",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "dc7b8afb-61e2-47b6-8c9a-aa019d6a0aae",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1ceff0dc-9bb6-42de-9e3b-7b993897e62a",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d2818578-db7b-4d24-805b-17000788580b",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "dff0acae-94b6-4bc7-9cce-7addad3e7cb1",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f5cc0401-d227-4ef9-8a81-cac8752acb64",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4dc53dd6-0851-4f09-8c46-74229b013879",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2927e832-589f-4daf-b1c1-40069116f9e4",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "25139deb-0e1f-4476-83d0-13a71192376f",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "62482d0d-67a8-475c-953f-79129751beec",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "af32005a-86a4-4a33-90ab-b5febd25728f",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "28b34573-53c1-404b-9472-3bfbc8650b3e",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "77eeb7ac-d208-4b2a-805b-f15427cd2d62",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f1d05a8f-a683-4bf6-9494-1ee3bd0cd179",
    status: "In Progress",
    diligenceName: "Name 39",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4b30bd5f-da08-47c4-a2ef-df1c7387ccca",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "060b95be-2e5e-4eab-b283-316ddfb26072",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6034a604-83ff-4023-b904-72adb094249b",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cf4905de-85ff-48ff-ab48-e6ebafc2ac31",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a3076cbe-9684-40fe-9802-784512febd5d",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c24a3d8a-2467-4006-8d61-e7208362d4dd",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3c826104-6d28-4fd9-813b-090fc195f944",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c2a7f8f1-e1ea-46fd-a136-1a4cb25f303e",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0ae7033e-6802-4642-8a97-ff394909b158",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "91e7bba7-dd48-4786-8096-bc372a7ccf1f",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ab531817-586c-4e23-8cf2-beca000bf933",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "35467802-711d-4af5-92ce-c1397cf3cabc",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "79bd1af7-9210-4a3f-92a1-d1bedb240e3c",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bafafed3-c5d5-4571-9a78-c4471263d872",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5ae27324-e6b9-4706-adf0-2ffb3ee8fc02",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "fce6cabb-65b1-4cb3-afb6-0a32fd75e107",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7daa8f76-ae6a-4949-b96a-9fd53fede8ca",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "bb91a099-aecf-45dc-ad4f-a2f506969417",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "32630a69-cea2-486a-a852-590e1377d062",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "aa4bdc5f-28ee-4bbb-857a-f688e299c406",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2cc85eea-014d-4250-b8f2-233e5b85b12e",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "404fa0a3-9c06-4902-8017-ff4a1a91facc",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "88209289-7d02-4332-96f0-75a585551179",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0181e802-f659-41a6-9da8-e5ca66bec27c",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9f11bc88-d085-4348-9aea-b7c6b1aacb9e",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e6ea2b56-b8cf-4d28-8617-32c365e42b78",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1a6a24ce-d0a0-4f11-8502-1412788bdd50",
    status: "In Progress",
    diligenceName: "Name 40",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5c1391bd-76c4-4130-a356-32a49d01302e",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f6128602-8957-43f9-91da-918356f713ea",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "53f6f463-7153-4e22-ad3c-7b014b8db2bd",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "44ec96cb-2819-4fbe-a139-13315c022144",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2ecb1e20-d15f-4e61-971e-d6aee5e28a9f",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "79ec3d0a-ddc8-4638-8c3c-869978d40691",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c0313ccd-19f3-47aa-b04f-1a15203f5f43",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ab9c0f06-93aa-41d2-89e1-2e32c760399a",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1f8bfd71-2e1a-4605-aebd-2699da3d4a0e",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "aee226db-e035-424b-b2c2-733fb2602f5f",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "65bf392f-01ea-434b-8103-1f4dc6d6e34f",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a85d00fd-a3f5-44ce-b6a7-29c6f1a3e8bc",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f7096c63-a438-4298-be9d-21d4fcfff828",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "71b7a301-cafe-402f-8aa6-1c29da6373f5",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "13b1d79c-4642-4319-9736-f95c35860f34",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1305f0c9-8a91-4308-ab2b-26c7c970f9c8",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a683eb2d-a538-492c-8c11-e643597a163b",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "24c477b8-7457-43d9-a82c-2ad4f55a4fc3",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e7f79fce-0231-4da3-8084-72ce63c95045",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "706e15df-ee33-4654-a535-b5371a8c2966",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5d0f0040-c4af-48da-8ff7-c88c3d7c810b",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6c590b84-f1ce-450d-842a-7e29fc42ead5",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d0034033-eaca-418f-9d17-ce6d022e56b4",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "77f6f2e2-9890-4a46-a799-c767a90936dc",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fa6a4d55-94e6-4502-8b31-0a71bb08b79a",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b588700e-1cfc-43e7-bfba-3ac4f588e816",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d9010b40-6878-4e8b-be8a-526e3d33fb9e",
    status: "In Progress",
    diligenceName: "Name 41",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a95dc9c3-8615-4b0b-87c5-b0deb4f7d5d5",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0a506d54-c22e-4b12-ae5f-7c90bc6f3de8",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8152b384-6f31-4709-8cff-950e4201e0e6",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "33956ae9-8eb1-48bf-8ca9-8710276aed32",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9e167b79-affb-479e-82ad-5eb24a7cb395",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d8d03867-ed44-4eab-8874-7d435770af29",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "eca3a16b-720c-498c-a00d-ecccc8e6133f",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ce134e4a-da17-43c3-9d57-3e4333cb0d7a",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c0fa5ae1-ae59-4898-888d-705dd2bc5725",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bbf5d9cd-ece1-4ff6-b8db-12200edcd34b",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "db0a081f-bc16-408a-aa0f-4613a45f20a1",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0ed53c30-eb7e-4fb5-86bf-5b2d61b39d67",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "28f04661-87bc-4877-8ab4-3660786ce643",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "fb05ccf5-7706-4ad2-b30a-88651d445079",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "66b6307c-53da-44e2-97a0-763d3b448203",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "152b2d62-eed0-457a-80eb-5f2fb25abf5b",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "458ce9fa-db28-4937-a1ed-8b7b8fb912d2",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "19828324-04be-4862-ae66-195a7a110342",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "05549dda-9b55-4e10-965a-70992f87fc1d",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bd8c6f0d-a724-4852-b4ff-31aa088aa6d6",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "994ab46f-dc92-44b8-adae-aad7a9d8c74c",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "48da0a55-f110-489a-960c-998124dcea1f",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7e9c8b81-f492-4965-a206-691e6c8d4563",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9d330fa1-9f1c-44c1-a7a8-1f87d5f4235b",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2933866a-8e0a-4a74-b9bb-64fba7416e31",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3c034273-43b8-4f3d-b497-ce4e4ce5e5de",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "874adf92-0dfa-4574-b35c-11ed7a842cfd",
    status: "In Progress",
    diligenceName: "Name 42",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6885ad1b-b506-4151-800e-b6d8f837f92e",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1eb7ad8f-dacb-4e04-9b4d-aef963401da1",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "20e2f974-3cc6-4386-b264-e10aa23d3dc5",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a374718b-e12d-4d9b-99c6-82b1fed6b821",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a41a8642-3bca-4ebc-ab97-31285d74f400",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6f8117e7-1957-4b38-848c-1269146d5528",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3ed110d3-1576-4724-b8b7-b459c5187d31",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "04d7321f-a4dd-4dfc-8204-adca1e8a31b0",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f483812d-d328-486a-be83-027e54a05d28",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e1f4f848-3057-4c87-95e1-c63e5e50ddb4",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ba527f44-19c0-417c-830e-2daceb415849",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "02ef5918-136b-4bd9-b492-d067272b522b",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "c11f3375-41a5-4f0e-b678-f21763517f1e",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e1378b49-b26f-4951-acc9-33ed51b124a7",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7ddaaa80-61d9-465c-9cf4-cf3ee83ea27e",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ccdde3d2-0ee2-4dee-9b92-dc76e3394dae",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1611a1fa-27be-4120-92a0-db61615415c2",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "18a3f95a-faa7-4a6a-9443-bc9423622d4d",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6aa89e74-1b17-4205-ab8f-8e58128017d6",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c15e56b6-2545-404f-8c39-176d53c65295",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b30d8ddd-f81e-4769-8a52-db08e3338511",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a789de18-4618-4467-920f-044efab2acfd",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "db09ced4-a1ab-4b1f-a38c-4a78e4380e68",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "73dd230e-99e1-43e2-a942-57456c5f2975",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "58ed6aa6-b066-49de-ac34-85d6df56645d",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a61f54fc-9f86-4d5c-8be5-f0baa2f1ab2e",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5986971d-f517-4630-9c28-0de99a61f28d",
    status: "In Progress",
    diligenceName: "Name 43",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5e98aee3-1ed4-4bd7-8eb4-c1f2300517f0",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d11bb82d-7a05-4e95-8ef4-4b75a3374e37",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e3a2ee46-feb8-48e0-8108-858a7a481b62",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6846a0c8-c3ca-4068-8447-2ecdb27d912c",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f5fcf31c-7b76-4d41-bafa-5b7a48a1b6df",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e2acaba4-e9ee-4005-84aa-790f2f5dfc6e",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c7314658-6464-4ba9-b6d3-5c3c6d7e3575",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d0fed6a6-ca2e-4efa-9fe9-d271d282803a",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0b13a6b1-510e-4587-802e-81b943a2f0db",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "575c88fa-3cca-4e07-a434-97bd4a45a8cc",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e49233c5-db5c-4e07-808c-8cc718a76760",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6359d712-7d79-4604-be41-8ee90b9177c0",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "cc5589b2-0d60-4519-a91f-eb9d599932a6",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b2a82b3d-560a-4a24-aed4-6982fef9f6a8",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a93b1fb1-c2f7-4f4e-9e35-e836aea7f170",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9b8a4cf2-1d38-4949-9164-1f96bdbf23d5",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a96f5fab-477a-4d84-90f8-9c95a89fa3ab",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "628d889c-d657-4037-89ef-1a6b768c7850",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e3161cca-8b2a-42d6-aaaf-e1b68580145b",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "64c6ff95-b261-4654-af3a-da4e4a2831b7",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f9b64cda-dd36-4f7c-bb90-b660bca5e5e5",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "cebc5f0d-b087-4bf9-b7df-3a7dad933249",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "981026a4-40db-479a-9a7e-b1379b2d0bf0",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4e5b7016-274f-409a-99b4-beaaa3228a09",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "866ea69c-f76b-4c36-aa65-15f07b9ad8e6",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "21a71922-9fc3-4042-b852-ca5d439367c5",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b3f39ae7-0080-4a7c-bbd5-d124f2b2672c",
    status: "In Progress",
    diligenceName: "Name 44",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "00004457-47da-406a-b9d7-73eea5b34c61",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "39e807b6-9d5b-4045-ae65-3bff15a1e7df",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a8fde937-554b-44dc-9d6d-e6dcdb01c1be",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0854c34e-f1eb-4a53-8470-de140a5fc172",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5a2bb2e4-43ff-4582-95c5-309e1d2f2b4c",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9ad48b56-6202-4975-988f-6243e67b2128",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e50ab7bf-f7a0-40f2-bb30-fe6657384136",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "1b575584-5b0c-4c58-b54d-0d0c0d79ba65",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e95c4a86-4010-486b-8423-a34157baf094",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "91a93589-ddff-40b7-b5fa-653d707b8a66",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e827c8ca-6917-476e-9bcb-bb08752a9375",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "819d1792-cec5-414a-bbbf-bc93216cbf84",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4ab72379-9d9d-4e62-8a80-85238159783c",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "823b5dc9-179e-4777-ab3d-7878267ca46e",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "aee53141-4eeb-4185-9560-0171ca57fa7f",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d82cdf1c-c922-4e33-92ff-5011c5c2ebfc",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5fd956ef-37c7-4b4d-a8fc-1d6c9ac96014",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "5e8f2084-dbbf-46d6-9504-b70362529f76",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "eb5e8b7c-9ea9-44f4-85ba-79f8e17d4c81",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "66035edb-7650-42ce-a1a7-e3c13104dea3",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "11eb52bf-5d0a-4f43-a355-b33113d3b40b",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2997c022-f5a8-41c2-8bb6-f94b2be60ba6",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7c1d68c7-f5f7-451b-89ed-d396bd6ba4a0",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b4abde73-36c7-449c-9dd2-a37312cfc0b0",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "dbf96567-676f-440d-9ed5-a07ceadaacb4",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c9a0bda1-1c4d-4172-9467-562b5a4d56e3",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4928e6ff-2bbc-43b5-b971-030f5cad7f0e",
    status: "In Progress",
    diligenceName: "Name 45",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4bf82d05-fb7e-445d-99e4-11d8bd8575bc",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6c970ca6-6ea6-4836-a59c-234123b5d84c",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d5ac63b4-ffc4-4af3-9a15-a6c5d23a550b",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "137694ef-9049-4007-8208-c92a3e531e84",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6c840786-6b8d-40e3-b98c-027a7648273d",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d5b529c2-006d-49ed-8a5b-39e0fb92203d",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4578660a-1eaf-4f1d-88d0-7b56bd868281",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "56ade8d9-fd34-40a7-9d29-6eea26ea65f7",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ffa376cc-5b2e-4248-b7d8-a985b11d2bb9",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a5d7d584-c681-48e6-86c1-6deddcc8c170",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b2284ba6-58ab-4777-877d-e73922d2dea0",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9c514400-676f-4aca-89bd-a567d11949fb",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "ec2111f4-6b81-4573-b994-cf3b20982ad6",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a0bfd3ad-8d10-48a5-8d7f-5020fa8be13e",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "1f27e112-ee43-4270-ba72-1cc2f1f60182",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b03abfb6-0325-49f2-b4f4-4d0ef4b70c63",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f70b965d-06cd-45e6-a26a-c17f826b16bd",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "4c681a78-0915-4714-ac71-ec300aca0d61",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "201b5b8e-7f6c-4dc8-929b-9bb1510e50e9",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "44c6e208-6be4-43aa-9865-cf26f9c13545",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "250dda8b-9420-447e-8293-337a76af752b",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fc0b2850-00bb-42e3-8973-a41d9bdaff1a",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3f765eb1-5849-4a91-b239-27fe3f02382b",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d9f8fe77-06a6-46a3-9f27-adc763ac8f84",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c444f5c2-597d-4bdd-b0b9-f5d057359848",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "81153dee-481b-4e77-b2f7-5667b3944965",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b67e67c5-2e38-4731-b9be-fc124f2812b4",
    status: "In Progress",
    diligenceName: "Name 46",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7469e930-ab02-4b27-9283-bd79933cf5df",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4bcb67a5-85a4-4ef1-b3af-0dc636a8e76e",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "7fd1a214-0dc4-4f05-b82d-3bf31b832a1a",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2f9219e5-dd2d-461c-a998-09e1be077a49",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5c10adc6-3e1b-4ce1-882c-88d6956de23a",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fae2644b-a342-4c45-8c0e-1851aaf2a80b",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "71837054-5977-43e8-b3d4-d8a1809f5849",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "59b5fbc3-1c06-4930-b23f-7dde5546b42d",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "d0f6f032-1ba0-49ae-b2d2-526e03597ed2",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "9e2714eb-84c9-41b2-bd8e-efd053c86b71",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8a71a3c7-3158-4e71-a3f7-9cbbd20ae649",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "5a71ff62-8161-499a-a9c7-b15a683c3c18",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4e02b0fb-ed82-4a50-a898-81463f534299",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7fcd0274-515c-48f6-821e-6b405b4f824e",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "2d5ca9cb-e675-4875-81fc-1d60ee498898",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "fc80f48b-5609-4a8a-9306-e3580b87a4b2",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "d9d6f224-a9c7-47ac-9aa1-0490039223d4",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "2fe40a8b-e28f-4467-bba9-76c741962945",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "16385c8c-273e-4023-85b7-95b571f92f30",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "54743bbb-f879-4ffd-a067-2d84eee399ad",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "bd9c7b2d-77f1-4904-882d-a4924c0cb3c4",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "08ce66f1-acda-4ac4-971a-12f0a5b6ee25",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8260b916-7ffc-42cb-bb25-967ec0b4c9d6",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "206a42ab-d8c3-48c8-8574-9e9f18c4836d",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "924c2003-82a7-48de-ba67-8ff4f18fbff0",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "37cdb488-6fd6-48a0-8746-c4cc475dcbde",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e98b2804-1849-459e-baeb-42bb652e1921",
    status: "In Progress",
    diligenceName: "Name 47",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "01b4782d-3efe-4959-8c80-d047b1868862",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "98d930ab-63d1-4c2b-bba9-5adddbc91c72",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c774a6e8-687e-4a6e-9423-39744a060538",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "01923eb5-df91-437b-97f4-64ff0bd22e87",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f3e84188-9711-4211-8dc5-fe04e7ea9577",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c828f794-df51-481c-be95-7f8d61a305b7",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "278149d6-a909-42be-b25a-43bfb1bff593",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "54f734f4-6938-42f7-91a7-09f14e2d98c0",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "71a126d0-2950-4a64-be22-aa2b2513378a",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6402ce74-7300-4658-8c54-9ccbe011d210",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "097d7571-7431-4d6f-b62b-fe847e98034b",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "8c1b5ad6-6866-4fea-a98a-2069fed47d97",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e44a9d3c-5402-4dba-9eba-2dfa0bf9bd0a",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6158530f-27a2-42a9-bc62-2e3b5c7ca380",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "904f5168-eb87-4088-b4f1-e576db44a71d",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "e77162b5-c262-40cc-88f7-68d85708e0ec",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "483fd043-580a-46a3-a6df-c12e0a91fc00",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "61d5f506-2fec-48c4-a33b-06daf6a6d550",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "03be84ce-e793-4117-822b-687be87ecf95",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "431d8a8c-feee-466e-81bf-bf4c67658dd3",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "22a54d0a-6866-4aab-bb72-f61bfd288c7c",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4238ed32-6f84-4b4a-a7bc-e27f02240687",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ec722a6a-a3bb-4360-afb3-77bccaa8a590",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ab08948f-9226-46ff-8eec-94191697a084",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6e3ec726-fdda-4d75-b3a2-c86911b8fa79",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "60577b07-fa46-4a64-85b0-a5d97cd6ba05",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "4a656faa-0dca-4305-8dda-b3971e395604",
    status: "In Progress",
    diligenceName: "Name 48",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9c48528d-c1fb-458e-af36-9bc21214cd11",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "fa948546-6fd7-43b9-83b0-1e229a4860e9",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5fb8b106-fc09-4010-bd03-fb64a1f6a6e7",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "36b196e1-678d-4df6-af70-4596e963c575",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "17b86adb-750c-4239-9c2a-04474c0ecfa1",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "c259da87-3a9e-4b5e-9eb0-48f8504e26dd",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "38c5431a-b847-4508-b7ea-9bcfdd5e7186",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3cbb2501-fb39-4132-8dcb-3f32437cc1d6",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2699bab7-5d10-4bf5-9ee2-2f00c951dd11",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a32c6a93-29b9-48a7-9417-d749ac9ccf8b",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "56d651c6-7cd3-4b85-b5f3-9b553722c621",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "16fdd5e1-5910-4047-9fbc-142bad798e84",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "b8012f9d-1bbb-4f51-a534-da38da6f4e53",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "da3364b2-e28f-42d8-9a29-1ddf5234fbdc",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a9ec5dd7-c34a-4c07-9166-d415b6a60ed2",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "bec22021-13d9-4826-99da-a99fade5501d",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7a865965-b950-4e17-baa7-d0e54efd8e6e",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "44f18e48-002c-434c-bb4b-1988a6c2d10f",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "2eafa69b-3ee4-46e8-bd47-dc2ac873592f",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "beb110f7-826c-4259-a808-6c6231060c00",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "94b2386a-b586-4cd4-944b-aa1b234e7cbf",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "f91c6cda-15c9-49d2-8fcb-5858ec4e7b76",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "574471cf-a948-47af-985c-77ffc15f354c",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "6e66ee8e-5dc2-4b83-bda6-1a275576be9e",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a3c331d5-86a9-4957-a66b-8acabfee090d",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8787a025-a48d-4667-a68d-18d14921af43",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "8dd53648-b54f-44e0-a2b0-1764272f68c5",
    status: "In Progress",
    diligenceName: "Name 49",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "0bd7f013-b968-4b7b-8b51-c3f9d53f60f2",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Kent County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "39a2aaf0-d5ce-46b0-a937-decd90702895",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "46b3dd4a-f441-4f61-bc17-cc9d799c6c14",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "13435fa9-7a50-4a50-a518-db3a98a5b47d",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Kent County Superior Court",
    source1Date: null,
    source2: "Kent County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "440b1e55-150b-4e2b-bbd4-94b2c86b5b7e",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-06",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "919e7585-73ef-46e5-bb16-f58637fe2d06",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Kent County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9aa57faa-76c8-4a5a-929d-7bffd37ede5b",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "U.S. District Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "9c4489e9-c525-4af4-962d-a5d57e76e3f0",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "U.S. Bankruptcy Court, District of DE",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "Kent",
      jurisdictionShort: "DE, Kent",
      name: "Delaware, Kent County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "b553b652-2310-49b8-a33d-c92e17fb3965",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "NY County Register's Office",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "50e7b02d-c5dd-4421-b235-a32aa25c12ee",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Register's Office",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "f86ea957-66b9-48d9-9138-bdf74ef95ef9",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "NY County Clerk",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "0a89c13d-1902-442f-b6e4-dc183d53da32",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "NY County Clerk",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "921ee58c-2374-4cb2-8693-3e1d851daa3b",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "NY County Supreme Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "4eda7849-5461-4916-ad43-29081d60a116",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "NY Department of State",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "7526637b-3089-4386-8de1-d224f9354324",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "U.S. District Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - Federal",
      mobileName: "Suits - Federal",
      gridName: "S & J - Federal",
      family: "Searches",
      sortOrder: 7
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "a72fc9ed-8124-4b76-8e57-63d0cec6e057",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "U.S. Bankruptcy Court, Southern District of NY",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Bankruptcy",
      mobileName: "Bankruptcy",
      gridName: "Bankruptcy",
      family: "Searches",
      sortOrder: 8
    },
    jurisdiction: {
      countyShort: "New York",
      jurisdictionShort: "NY, New York",
      name: "New York, New York County",
      state: "New York"
    },
    reviewHistory: []
  },
  {
    id: "6eef1a90-c17d-4207-973f-99ec9d2e0c24",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-09",
    product: {
      name: "UCC - State",
      mobileName: "UCC - State",
      gridName: "UCC - State",
      family: "Searches",
      sortOrder: 2
    },
    jurisdiction: {
      countyShort: "",
      jurisdictionShort: "AL",
      name: "Alabama",
      state: "Alabama"
    },
    reviewHistory: []
  },
  {
    id: "561c4b31-0ea7-4676-aae9-7d5d1463d70e",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "New Castle County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "90cf03a0-ffb5-43e3-984e-0d88b5d50ff8",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "23dbead2-c29d-448a-aac7-9c3e7e5c6ca2",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "e580ea87-906e-47de-bddb-1901d379323f",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "New Castle County Superior Court",
    source1Date: null,
    source2: "New Castle County Chancery Court",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "ed13db85-832c-461f-8f80-f811bc46cea5",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "New Castle County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "New Castle",
      jurisdictionShort: "DE, New Castle",
      name: "Delaware, New Castle County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "3b0dd508-7fc3-48ce-acc7-57821f9e5b01",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Sussex County Recorder of Deeds",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "UCC - County",
      mobileName: "UCC - County",
      gridName: "UCC - County",
      family: "Searches",
      sortOrder: 1
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "a5b140d4-8e5b-4273-bf9e-202c3f9e76b7",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Sussex County Superior Court",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - State",
      mobileName: "Tax Lien - State",
      gridName: "Tax Lien - State",
      family: "Searches",
      sortOrder: 4
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "aa8ba9dc-fb1a-4e7d-9016-c7fc51bd99bc",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Judgment Lien",
      mobileName: "Judgment Lien",
      gridName: "Judgment Lien",
      family: "Searches",
      sortOrder: 5
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "08701e55-39b7-48ce-bdb9-ec8e1d89456d",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "Sussex County Superior Court ",
    source1Date: null,
    source2: "Sussex County Chancery Court ",
    source2Date: null,
    yearsBack: "10",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Suits & Judgments - State",
      mobileName: "Suits - State",
      gridName: "S & J - State",
      family: "Searches",
      sortOrder: 6
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  },
  {
    id: "5c02ff41-2432-40f7-b091-8bf72e75ae9a",
    status: "In Progress",
    diligenceName: "Name 50",
    file: null,
    source1: "DE Secretary of State",
    source1Date: null,
    source2: "Sussex County Recorder of Deeds",
    source2Date: null,
    yearsBack: "",
    dealbinderMessage: null,
    estimatedTurnaround: "2022-06-08",
    product: {
      name: "Tax Lien - Federal",
      mobileName: "Tax Lien - Federal",
      gridName: "Tax Lien - Federal",
      family: "Searches",
      sortOrder: 3
    },
    jurisdiction: {
      countyShort: "Sussex",
      jurisdictionShort: "DE, Sussex",
      name: "Delaware, Sussex County",
      state: "Delaware"
    },
    reviewHistory: []
  }
];

export const items = _.uniq(
  orderLineItems.map(({ diligenceName }) => diligenceName)
);
