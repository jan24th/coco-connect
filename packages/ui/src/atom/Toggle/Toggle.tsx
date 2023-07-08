import { Switch } from "@headlessui/react";

export const Toggle = ({
  enabled,
  onChange,
  srOnly,
}: {
  enabled: boolean;
  onChange: () => void;
  srOnly?: string;
}) => {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      {srOnly && <span className="sr-only">{srOnly}</span>}
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
