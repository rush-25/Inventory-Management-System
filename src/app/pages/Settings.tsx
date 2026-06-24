import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Building2, UploadCloud, Users, Key } from 'lucide-react';
import { toast } from 'sonner';

export function Settings() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Settings saved successfully');
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Manage company profile, users, and system preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-2">
          <button className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-50 text-blue-700">
            <Building2 className="h-5 w-5 mr-3" />
            Company Profile
          </button>
          <button className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100">
            <Users className="h-5 w-5 mr-3" />
            User Management
          </button>
          <button className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-100">
            <Key className="h-5 w-5 mr-3" />
            Security
          </button>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader title="Company Profile" subtitle="Update your business details and branding." />
            <CardContent>
              <form onSubmit={handleSave} className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="h-24 w-24 rounded-lg bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-slate-400" />
                  </div>
                  <Button type="button" variant="outline">
                    <UploadCloud className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input label="Company Name" defaultValue="V2 Phone Arcade" />
                  <Input label="Registration Number" defaultValue="REG-2023-9912" />
                  <Input label="Contact Number" defaultValue="+1 (555) 123-4567" />
                  <Input label="Email Address" defaultValue="admin@v2phonearcade.com" />
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">Business Address</label>
                    <textarea 
                      className="flex w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[80px]"
                      defaultValue="123 Tech Boulevard, Silicon Valley, CA 94025"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
