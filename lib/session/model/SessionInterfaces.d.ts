import { SessionKey } from "../keys/SessionKey";
import { SignInInfoKeys } from "../keys/SignInInfoKeys";
import { UserProfileKeys } from "../keys/UserProfileKeys";
import { AccessTokenKeys } from "../keys/AccessTokenKeys";
export declare type ISessionValue = ISignInInfo | IUserProfile | IAccessToken | string | number;
export declare type ISession = {
    [SessionKey.Id]?: string;
    [SessionKey.ClientSig]?: string;
    [SessionKey.Hijacked]?: string | null;
    [SessionKey.OAuth2Nonce]?: string;
    [SessionKey.ZXSKey]?: string;
    [SessionKey.Expires]?: number;
    [SessionKey.LastAccess]?: number;
    [SessionKey.Pst]?: string;
    [SessionKey.SignInInfo]?: ISignInInfo;
    [SessionKey.ExtraData]?: any;
};
export declare type ISignInInfo = {
    [SignInInfoKeys.AccessToken]?: IAccessToken;
    [SignInInfoKeys.AdminPermissions]?: string;
    [SignInInfoKeys.SignedIn]?: number;
    [SignInInfoKeys.UserProfile]?: IUserProfile;
};
export declare type IUserProfile = {
    [UserProfileKeys.Email]?: string;
    [UserProfileKeys.Forename]?: string;
    [UserProfileKeys.UserId]?: string;
    [UserProfileKeys.Locale]?: string;
    [UserProfileKeys.Scope]?: string;
    [UserProfileKeys.Surname]?: string;
};
export declare type IAccessToken = {
    [AccessTokenKeys.AccessToken]?: string;
    [AccessTokenKeys.ExpiresIn]?: number;
    [AccessTokenKeys.RefreshToken]?: string;
    [AccessTokenKeys.TokenType]?: string;
};
