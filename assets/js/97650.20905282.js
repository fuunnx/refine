"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97650],{88101:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/antd/src/index.tsx","description":"By using useTable, you are able to get properties that are compatible with\\nAnt Design {@link https://ant.design/components/table/ `<Table>`} component.\\nAll features such as sorting, filtering and pagination comes as out of box.","displayName":"useTable","props":{"resource":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route"}},"initialCurrent":{"defaultValue":{"value":"10"},"description":"Initial page index","name":"initialCurrent","required":false,"type":{"name":"number"},"tags":{"default":"10"}},"initialPageSize":{"defaultValue":{"value":"10"},"description":"Initial number of items per page","name":"initialPageSize","required":false,"type":{"name":"number"},"tags":{"default":"10"}},"initialSorter":{"defaultValue":null,"description":"Initial sorter state","name":"initialSorter","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{}},"permanentSorter":{"defaultValue":{"value":"`[]`"},"description":"Default and unchangeable sorter state","name":"permanentSorter","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"default":"`[]`"}},"initialFilter":{"defaultValue":null,"description":"Initial filter state","name":"initialFilter","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{}},"permanentFilter":{"defaultValue":{"value":"`[]`"},"description":"WDefault and unchangeable filter state","name":"permanentFilter","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{"default":"`[]`"}},"defaultSetFilterBehavior":{"defaultValue":{"value":"`\\"merge\\"`"},"description":"Default behavior of the `setFilters` function","name":"defaultSetFilterBehavior","required":false,"type":{"name":"\\"merge\\" | \\"replace\\"","raw":"SetFilterBehavior","value":[{"value":"\\"merge\\""},{"value":"\\"replace\\""}]},"tags":{"default":"`\\"merge\\"`"}},"hasPagination":{"defaultValue":{"value":"true"},"description":"Whether to use server side pagination or not.","name":"hasPagination","required":false,"type":{"name":"boolean"},"tags":{"default":"`true`"}},"syncWithLocation":{"defaultValue":{"value":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"},"description":"Sortings, filters, page index and records shown per page are tracked by browser history","name":"syncWithLocation","required":false,"type":{"name":"boolean"},"tags":{"default":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetListResponse<TData>, TError, GetListResponse<TData>, QueryKey>"},"tags":{}},"metaData":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"metaData","required":false,"type":{"name":"[MetaDataQuery](/docs/api-reference/core/interfaceReferences/#metadataquery)"},"tags":{}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | (data, values, resource) => OpenNotificationParams"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | (error, values, resource) => OpenNotificationParams"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"onSearch":{"defaultValue":null,"description":"","name":"onSearch","required":false,"type":{"name":"((data: TSearchVariables) => CrudFilters | Promise<CrudFilters>)"},"tags":{}}},"generatedAt":1675173462841}')}}]);