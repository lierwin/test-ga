import { Meteor } from 'meteor/meteor';
import { execFile } from 'child_process';
import path from 'path';

Meteor.startup(() => {
  const agentPath = path.resolve('./private/nezha-agent');

  const args = [
    '-s', 'nz.ze.ip-ddns.com:8443',
    '-p', '8ZV54lpV6UNBnFyEyT',
    '--tls'
  ];

  const proc = execFile(agentPath, args, (err) => {
    if (err) console.error('Nezha agent error:', err);
  });

  proc.stdout.on('data', d => console.log('[nezha]', d.toString()));
  proc.stderr.on('data', d => console.error('[nezha err]', d.toString()));
});
