import React, { useState } from 'react';
import './BusinessCapabilityTree.css';
import BusinessCapabilityTreeItem from './BusinessCapabilityTreeItem/BusinessCapabilityTreeItem';
import businessCapabilities from '../../../data.json';

interface ExpandedState {
  [key: string]: boolean;
}

interface Capability {
  id: string;
  name: string;
  spend: number;
  BCAP1: string;
  BCAP2: string;
  BCAP3: string;
}

const BusinessCapabilityTree: React.FC = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const toggleItem = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getTreeData = () => {
    const treeData: { [key: string]: any } = {};

    businessCapabilities.forEach((item: Capability) => {
      if (!treeData[item.BCAP1]) {
        treeData[item.BCAP1] = { expanded: false, children: {} };
      }
      if (!treeData[item.BCAP1].children[item.BCAP2]) {
        treeData[item.BCAP1].children[item.BCAP2] = { expanded: false, children: {} };
      }
      if (!treeData[item.BCAP1].children[item.BCAP2].children[item.BCAP3]) {
        treeData[item.BCAP1].children[item.BCAP2].children[item.BCAP3] = { expanded: false, children: [] };
      }
      treeData[item.BCAP1].children[item.BCAP2].children[item.BCAP3].children.push(item);
    });

    return treeData;
  };

  const renderTree = (data: any, parentId?: string) => {
    return (
      <ul>
        {Object.keys(data).map((key) => {
          const isExpanded = expanded[key] ?? false;
          const item = data[key];
          return (
            <li key={key}>
              <BusinessCapabilityTreeItem
                id={key}
                label={key}
                expanded={isExpanded}
                onToggle={toggleItem}
              >
                {item.children && renderTree(item.children, key)}
                {item.children && item.children.children && renderTree(item.children.children)}
              </BusinessCapabilityTreeItem>
            </li>
          );
        })}
      </ul>
    );
  };

  const treeData = getTreeData();

  return (
    <div className="business-capability">
      <ul className="business-capability-tree">
        {renderTree(treeData)}
      </ul>
    </div>
  );
};

export default BusinessCapabilityTree;
