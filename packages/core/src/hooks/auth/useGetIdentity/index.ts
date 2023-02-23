import {
    useQuery,
    UseQueryResult,
    UseQueryOptions,
} from "@tanstack/react-query";

import { useAuthBindingsContext, useLegacyAuthContext } from "@contexts/auth";
import { IdentityResponse } from "../../../interfaces";

export type UseGetIdentityLegacyProps<TData> = {
    legacy: true;
    queryOptions?: UseQueryOptions<TData>;
};

export type UseGetIdentityProps<TData = IdentityResponse> = {
    legacy?: false;
    queryOptions?: UseQueryOptions<TData>;
};

export type UseGetIdentityCombinedProps<TData = any> = {
    legacy: boolean;
    queryOptions?: UseQueryOptions<TData> | UseQueryOptions<IdentityResponse>;
};

export type UseGetIdentityLegacyReturnType<TData> = UseQueryResult<
    TData,
    unknown
>;

export type UseGetIdentityReturnType<TData = IdentityResponse> = UseQueryResult<
    TData,
    unknown
>;

export type UsePermissionsCombinedReturnType<TData = any> =
    | UseQueryResult<TData, unknown>
    | UseQueryResult<IdentityResponse, unknown>;

export function useGetIdentity<TData = any>(
    props: UseGetIdentityLegacyProps<TData>,
): UseGetIdentityLegacyReturnType<TData>;

export function useGetIdentity<TData = IdentityResponse>(
    props?: UseGetIdentityProps<TData>,
): UseGetIdentityReturnType<TData>;

export function useGetIdentity<TData = any>(
    props?: UseGetIdentityCombinedProps<TData>,
): UsePermissionsCombinedReturnType<TData>;

/**
 * `useGetIdentity` calls the `getUserIdentity` method from the {@link https://refine.dev/docs/core/providers/auth-provider `authProvider`} under the hood.
 *
 * @see {@link https://refine.dev/docs/core/hooks/auth/useGetIdentity} for more details.
 *
 * @typeParam TData - Result data of the query
 *
 */
export function useGetIdentity<TData = any>({
    legacy = false,
    queryOptions,
}: UseGetIdentityProps<TData> | UseGetIdentityLegacyProps<TData> = {}):
    | UseGetIdentityReturnType<TData>
    | UseGetIdentityLegacyReturnType<TData> {
    const { getUserIdentity: legacyGetUserIdentity } = useLegacyAuthContext();
    const { getIdentity } = useAuthBindingsContext();

    const queryResponse = useQuery<TData>(
        ["getUserIdentity"],
        // Enabled check for `getUserIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
        (getIdentity as (params?: unknown) => Promise<TData>) ??
            (() => Promise.resolve({})),
        {
            enabled: !legacy && !!getIdentity,
            retry: false,
            ...(legacy === true ? {} : queryOptions),
        },
    );

    const legacyQueryResponse = useQuery<TData>(
        ["getUserIdentity"],
        // Enabled check for `getUserIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
        legacyGetUserIdentity ?? (() => Promise.resolve({})),
        {
            enabled: legacy && !!legacyGetUserIdentity,
            retry: false,
            ...(legacy ? queryOptions : {}),
        },
    );

    return legacy ? legacyQueryResponse : queryResponse;
}
