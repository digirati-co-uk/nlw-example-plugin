export const theChainTemplate = {
  type: "nlw-the-chain",
  metadata: {
    label: "The Chain",
    description: "Project template for the chain project",
    version: "1.0.0"
  },
  configuration: {
    defaults: {
      allowCollectionNavigation: true,
      allowManifestNavigation: true,
      allowCanvasNavigation: true,
      randomlyAssignCanvas: false,
      priorityRandomness: true,
      claimGranularity: "canvas",
      maxContributionsPerResource: "500",
      allowSubmissionsWhenCanvasComplete: false,
      randomlyAssignReviewer: true,
      manuallyAssignedReviewer: null,
      adminsAreReviewers: true,
      hideCompletedResources: false,
      revisionApprovalsRequired: 1,
      contributionWarningTime: false,
      skipAutomaticOCRImport: false,
      allowPersonalNotes: false,
      defaultEditorOrientation: "horizontal",
      skipManifestListingPage: false,
      hideStatistics: false,
      hideProjectCollectionNavigation: false,
      hideProjectManifestNavigation: false,
      searchStrategy: "websearch",
      hideManifestMetadataOnCanvas: false,
      hideCanvasThumbnailNavigation: false,
      showSearchFacetCount: false,
      miradorCanvasPage: false,
      universalViewerCanvasPage: false,
      contributionMode: "annotation",
      shortExpiryTime: "10",
      longExpiryTime: "1440",
      modelPageShowAnnotations: "when-open",
      modelPageShowDocument: "when-open",
      atlasBackground: "#f9f9f9",
      canvasPageShowAnnotations: "when-open",
      canvasPageShowDocument: "when-open",
      forkMode: false,
      reviewOptions: {
        allowMerging: false
      },
      modelPageOptions: {
        fixedTranscriptionBar: false,
        preventContributionAfterRejection: false,
        preventContributionAfterSubmission: false,
        preventMultipleUserSubmissionsPerResource: false,
        preventContributionAfterManifestUnassign: false,
        hideViewerControls: false,
        enableRotation: true,
        disablePreview: true,
        disableNextCanvas: true
      },
      projectPageOptions: {
        hideStartContributing: true,
        hideSearchButton: true,
        hideRandomManifest: false,
        hideRandomCanvas: false,
        reviewerDashboard: true
      },
      manifestPageOptions: {
        hideStartContributing: true,
        hideOpenInMirador: true,
        hideSearchButton: false,
        hideRandomCanvas: false,
        hideFilterImages: false,
        directModelPage: true
      },
      headerOptions: {
        hideSiteTitle: false,
        hideProjectsLink: true,
        hideCollectionsLink: false,
        hideDashboardLink: false,
        hidePageNavLinks: false,
        hideSearchBar: false
      },
      searchOptions: {
        nonLatinFulltext: false,
        searchMultipleFields: false,
        onlyShowManifests: false
      },
      activityStreams: {
        manifest: true,
        canvas: false,
        curated: true,
        published: false
      },
      metadataSuggestions: {
        collection: false,
        manifest: false,
        canvas: false
      }
    }
  },
  captureModel: {
    document: {
      id: "6d34e70a-97ef-46c5-a05f-843cfc1313d0",
      type: "entity",
      label: "The chain",
      properties: {
        "Daily Data": [
          {
            id: "b795a81d-891b-47ed-b46a-b511a8b27a98",
            type: "entity",
            label: "Daily Data",
            properties: {
              Max: [
                {
                  id: "6423aa6a-0cd7-40da-980c-95cf6f6d28f9",
                  type: "text-field",
                  label: "Thermometer reading 1",
                  value: "",
                  description: "The reading is taken from the top tip of the vertical line"
                }
              ],
              Min: [
                {
                  id: "ec522839-bbaa-49bc-8e5a-5526495b2788",
                  type: "text-field",
                  label: "Thermometer reading 2",
                  value: "",
                  description: "If there are only two thermometer readings leave this box blank (refer to guidelines)"
                }
              ],
              "1:30": [
                {
                  id: "c435573a-d3a7-4a6f-8a64-56623e0f83f6",
                  type: "text-field",
                  label: "Barometer reading 2",
                  value: "",
                  description: "Usually marked as 1.30.  If there are only two barometer readings, this field should be left blank and the second reading put into box 3 below.",
                  previewInline: true
                }
              ],
              "6:30": [
                {
                  id: "a56008cc-f1f7-4b74-a6de-d9089d1c34f9",
                  type: "text-field",
                  label: "Barometer reading 3",
                  value: "",
                  description: "Usually shown as 6.30 reading. Or the second reading if only two are present."
                }
              ],
              "8.30": [
                {
                  id: "5665b73e-74b4-4b9c-bb8a-8ded4f7071f7",
                  type: "text-field",
                  label: "Barometer Reading 1",
                  value: "",
                  description: "This will either be shown as 8.30 or reading 1."
                }
              ],
              "Thermometer reading 3": [
                {
                  id: "26ab4d32-9183-4031-af0f-969dcccef5c2",
                  type: "text-field",
                  label: "Thermometer reading 3",
                  value: ""
                }
              ],
              "Date of Entry (DD/MM/YYYY)": [
                {
                  id: "2ca6e36c-89b3-48aa-b6e6-feb409ca0959",
                  type: "text-field",
                  label: "Date of Entry (DD/MM/YYYY)",
                  value: "",
                  description: "",
                  placeholder: "Enter date in format DD/MM/YYYY"
                }
              ]
            }
          }
        ],
        "Annual Data": [
          {
            id: "cb0847fd-0f0d-44be-8a50-64b3bdba08ac",
            type: "entity",
            label: "Annual Data",
            properties: {
              Date: [
                {
                  id: "91b97838-ca95-4900-b450-259b20915942",
                  type: "text-field",
                  label: "Date of entry (MM/YYYY)",
                  value: "",
                  multiline: false,
                  placeholder: "MM/YYYY",
                  allowMultiple: false
                }
              ],
              "Day temp": [
                {
                  id: "540ebb50-90f3-49cd-b4e9-d20fda099d99",
                  type: "text-field",
                  label: "Highest Temp",
                  value: "",
                  description: "Highest Day Temp (H.D)",
                  allowMultiple: false
                }
              ],
              "Means HD": [
                {
                  id: "6c68ea59-c4d4-48ab-b5b8-ccdf575d9d85",
                  type: "text-field",
                  label: "Means of H.D. temp",
                  value: "",
                  allowMultiple: false
                }
              ],
              rainfall: [
                {
                  id: "f4547af2-b267-4a48-8997-878815b0a0a5",
                  type: "text-field",
                  label: "Monthly rainfall",
                  value: "",
                  allowMultiple: false
                }
              ],
              "Any other": [
                {
                  id: "da2a92c1-de69-4569-ab15-04b87b72780a",
                  type: "text-field",
                  label: "Any other data",
                  value: "",
                  description: "Other data such as 25yrl total. Please enter data as \"title - data\" for example \"25yr total - 4inches\"",
                  allowMultiple: false
                }
              ],
              "rain days": [
                {
                  id: "636e4d16-81cd-4b7b-93cb-83dc6c2a2302",
                  type: "text-field",
                  label: "Number of days rain fell",
                  value: "",
                  multiline: false,
                  allowMultiple: false
                }
              ],
              "Mean month": [
                {
                  id: "c21fc3d0-7908-4012-b91d-0a75431fc23c",
                  type: "text-field",
                  label: "Means of temp for Month",
                  value: "",
                  allowMultiple: false
                }
              ],
              "Mean night": [
                {
                  id: "26c051cc-ed88-4c6b-b425-d65fce793167",
                  type: "text-field",
                  label: "Means of L.D temp",
                  value: "",
                  allowMultiple: false
                }
              ],
              "Annual rain": [
                {
                  id: "866952a5-a469-4423-88cb-fe7fbe04405e",
                  type: "text-field",
                  label: "Annual rainfall total",
                  value: "",
                  description: "This will be shown under the December totals"
                }
              ],
              "Lowest temp": [
                {
                  id: "02bb43cb-a40b-4e9c-8b0e-e3eefcef6308",
                  type: "text-field",
                  label: "Night Temp",
                  value: "",
                  description: "Lowest night temperature (L.N.)",
                  allowMultiple: false
                }
              ]
            }
          }
        ],
        "Diary Entry": [
          {
            id: "8305b434-1fa0-4fad-a975-cf1b93413ac1",
            type: "entity",
            label: "Diary Entry",
            properties: {
              Date: [
                {
                  id: "dd7f4605-b1ee-438c-ad33-6434e9997910",
                  type: "text-field",
                  label: "Date of entry ",
                  value: "",
                  description: "Day of the diary entry, or the date the week starts if entry covers the whole week.",
                  placeholder: "Enter date in format DD/MM/YYYY"
                }
              ],
              "weekly diary": [
                {
                  id: "669ce983-47b6-41a4-87a6-671df2c6752e",
                  type: "checkbox-field",
                  label: "Weekly diary?",
                  value: false,
                  inlineLabel: "Tick this box if diary entry covers the whole week"
                }
              ],
              Transcription: [
                {
                  id: "da95729c-034c-486e-a9d2-b4a27d4b3812",
                  type: "text-field",
                  label: "Transcribe the diary entry",
                  value: "",
                  multiline: true,
                  description: "You can use the rotate button on the image to make reading the data easier"
                }
              ]
            }
          }
        ],
        "Weekly Data": [
          {
            id: "526b84fb-169e-4a39-901b-a8a7de1cf429",
            type: "entity",
            label: "Weekly Data",
            properties: {
              Date: [
                {
                  id: "63e7ab48-2522-443d-b383-8e8144c959fe",
                  type: "text-field",
                  label: "Week Commencing",
                  value: "",
                  description: "Sunday date as DD/MM/YYYY",
                  placeholder: "DD/MM/YYYY",
                  allowMultiple: false
                }
              ],
              rainfall: [
                {
                  id: "bea22c01-0664-41a1-9063-f3cd0b85a04e",
                  type: "text-field",
                  label: "Total rainfall",
                  value: "",
                  description: "Only input the total rainfall figure, which can be found in the bottom right hand corner of the page"
                }
              ],
              "Weekly Max": [
                {
                  id: "ccecc7cd-4010-481e-b562-43d06653b931",
                  type: "text-field",
                  label: "Thermometer 1",
                  value: "",
                  description: "This will either be the first reading or the Min avg depending on the page."
                }
              ],
              "Weekly Min": [
                {
                  id: "ffa34096-724c-46bc-b60c-313005a154eb",
                  type: "text-field",
                  label: "Thermometer 2",
                  value: "",
                  description: "If there are just Min and Max readings, leave this blank."
                }
              ],
              "Eilirs data": [
                {
                  id: "475d7b95-3de1-4f32-a58b-5f2b21c33430",
                  type: "text-field",
                  label: "Thermometer 3",
                  value: "",
                  description: "This will either be the last avg. reading or the Max avg depending on the page."
                }
              ]
            }
          }
        ],
        "Transcribe Insert": [
          {
            id: "76870163-4ee3-45dd-8bec-5321e825e0c0",
            type: "entity",
            label: "Transcribe Insert",
            properties: {
              Date: [
                {
                  id: "5c044c0b-a0ec-4053-a09a-d6c5fc1b8775",
                  type: "text-field",
                  label: "Date of insert",
                  value: "",
                  description: "Should be tied to the date of the register its attached too. Iff unsure then just put the day, month or year you can identify and use ? in replace of those missing parts of the date. ",
                  placeholder: "DD/MM/YYYY - e.g  ??/03/??54  "
                }
              ],
              type: [
                {
                  id: "ea947898-a52f-4e2b-876e-6b354ad93abb",
                  type: "dropdown-field",
                  label: "Type of Item",
                  value: null,
                  options: [
                    {
                      text: "Newspaper Cutting",
                      value: "Newspaper Cutting"
                    },
                    {
                      text: "Programme",
                      value: "Programme"
                    },
                    {
                      text: "Leaflet",
                      value: "Leaflet"
                    },
                    {
                      text: "Invitation",
                      value: "Invitation"
                    },
                    {
                      text: "Journal",
                      value: "Journal"
                    },
                    {
                      text: "Other",
                      value: "Other"
                    },
                    {
                      text: "",
                      value: ""
                    }
                  ],
                  description: "Select the type of item from below",
                  placeholder: "Select from list"
                }
              ],
              transcription: [
                {
                  id: "5cbf8625-3f6b-40e7-b038-30a84afc5d11",
                  type: "text-field",
                  label: "Transcribe item",
                  value: "",
                  multiline: true,
                  description: "If the insert is very long,(e,g a newpaper page) a synopsis of the text will suffice.",
                  previewInline: true
                }
              ]
            }
          }
        ]
      }
    },
    structure: {
      id: "b146a37a-aaca-498d-aefd-6de3e0d24809",
      type: "choice",
      description: "Here are some choices.",
      profile: [
        "tabs"
      ],
      label: "The Chain",
      items: [
        {
          id: "e05da78e-3694-4f57-8b6c-44a061c6012b",
          type: "model",
          description: "Transcribe Daily Data",
          label: "Daily Data",
          fields: [
            [
              "Daily Data",
              [
                "Date of Entry (DD/MM/YYYY)",
                "8.30",
                "1:30",
                "6:30",
                "Max",
                "Min",
                "Thermometer reading 3"
              ]
            ]
          ],
          instructions: "The barometer readings are shown as horizontal lines on the image, and the thermometer readings are shown as vertical lines. If you are unsure of any fields please consult the guidelines."
        },
        {
          id: "08d33010-4f7a-413e-bea6-623ce7d3623a",
          type: "model",
          label: "Transcribe diary",
          fields: [
            [
              "Diary Entry",
              [
                "Date",
                "Transcription",
                "weekly diary"
              ]
            ]
          ],
          description: "",
          instructions: "Record the date of the entry, as found along the top line of the image. Transcribe the diary entry (which is normally written vertically in each column). Use the rotate button to help read the diary entry."
        },
        {
          id: "fde89117-e03e-4fb3-8078-5f6406f0e76c",
          type: "model",
          label: "Weekly Data",
          fields: [
            [
              "Weekly Data",
              [
                "Date",
                "Weekly Max",
                "Weekly Min",
                "Eilirs data",
                "rainfall"
              ]
            ]
          ]
        },
        {
          id: "a8ed5323-b08f-42d6-a70e-3c637a93b1eb",
          type: "model",
          label: "Annual Data",
          fields: [
            [
              "Annual Data",
              [
                "Date",
                "Day temp",
                "Lowest temp",
                "Means HD",
                "Mean night",
                "Mean month",
                "rainfall",
                "rain days",
                "Annual rain",
                "Any other"
              ]
            ]
          ]
        },
        {
          id: "15e69025-7e40-407f-8242-53bd509d64ba",
          type: "model",
          label: "Transcribe insert",
          fields: [
            [
              "Transcribe Insert",
              [
                "Date",
                "type",
                "transcription"
              ]
            ]
          ]
        }
      ]
    }
  }
}
