"use client";

import { DetailsHeader } from "@/components/features/navigation/details-header";
import { 
  Bell, 
  Lock, 
  EyeSlash, 
  At, 
  Translate, 
  HandEye, 
  Question,
  SignOut,
  UserCircleGear,
  Moon,
  ShieldCheck,
  Globe
} from "@phosphor-icons/react";

interface SettingItemProps {
  icon: any;
  label: string;
  value?: string;
  destructive?: boolean;
}

function SettingItem({ icon: Icon, label, value, destructive }: SettingItemProps) {
  return (
    <button className="flex items-center justify-between w-full py-4 border-b last:border-0 group transition-colors">
      <div className="flex items-center gap-4">
        <Icon size={24} className={destructive ? "text-red-500" : "text-foreground"} />
        <span className={destructive ? "text-red-500 font-medium" : "text-[15px] font-medium"}>
          {label}
        </span>
      </div>
      {value && <span className="text-sm text-muted-foreground">{value}</span>}
    </button>
  );
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col">
      <DetailsHeader title="Settings" />
      
      <div className="p-4 flex flex-col">
        <div className="mb-6">
          <h2 className="text-sm font-bold text-muted-foreground px-0 mb-2">Account</h2>
          <SettingItem icon={Bell} label="Notifications" />
          <SettingItem icon={Lock} label="Privacy" />
          <SettingItem icon={EyeSlash} label="Hidden Words" />
          <SettingItem icon={UserCircleGear} label="Account center" />
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-muted-foreground px-0 mb-2">Display</h2>
          <SettingItem icon={Moon} label="Appearance" value="System" />
          <SettingItem icon={Translate} label="Language" value="English" />
          <SettingItem icon={Globe} label="Region" value="Global" />
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-muted-foreground px-0 mb-2">Support</h2>
          <SettingItem icon={ShieldCheck} label="Security" />
          <SettingItem icon={Question} label="Help" />
          <SettingItem icon={HandEye} label="Accessibility" />
        </div>

        <div className="mt-4">
          <SettingItem icon={SignOut} label="Log out" destructive />
        </div>
      </div>
    </div>
  );
}
