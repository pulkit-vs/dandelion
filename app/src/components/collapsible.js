import { Collapse } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { SortableList } from './sortable-list';
import { sprintData } from '../../utils/constants';
import Avatar from '@material-ui/core/Avatar';

const { Panel } = Collapse;

const Header = ({ data }) => {
  return (
    <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <label style={{ fontWeight: '600px', fontSize: '18px' }}>{data.name}</label>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {data.teamMembers.map((team) => {
          return <Avatar alt='avatar' src={team} style={{ height: '22px', width: '22px', marginRight: '8px' }} />;
        })}
        <label>{`${data.totalIssues} issues`}</label>
      </div>
    </div>
  );
};

export default class Collapsible extends React.Component {
  callback = (key) => {
    console.log(key);
  };
  render() {
    return (
      <Collapse onChange={this.callback}>
        {sprintData.map((sprint, index) => {
          return (
            <Panel header={<Header data={sprint} />} key={index}>
              {sprint.tickets.map((ticket) => {
                return SortableList(
                  ticket.ticketName,
                  ticket.id,
                  ticket.ticketIcon,
                  ticket.assignedTo,
                  ticket.priority
                );
              })}
            </Panel>
          );
        })}
      </Collapse>
    );
  }
}
